/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Middleware } from 'redux';

const socketMiddleware = (wsActions: any): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;
    let url;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsStart, onOpen, onError, onClose, onMessage, wsSend } =
        wsActions;

      if (type === wsStart) {
        url = payload;
        socket = new WebSocket(url);
      } else if (type === onClose) {
        socket && socket.close(1000, 'CLOSE_NORMAL');
      }
      if (socket) {
        socket.onopen = (e) => {
          dispatch({ type: onOpen, payload: e });
        };
        socket.onerror = (e) => {
          dispatch({ type: onError, payload: e });
        };
        socket.onmessage = (e) => {
          const { data } = e;
          const parsedData = JSON.parse(data);
          dispatch({ type: onMessage, payload: parsedData });
        };
        socket.onclose = (e) => {
          dispatch({ type: onClose, payload: e });
        };

        if (type === wsSend) {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};

export default socketMiddleware;
