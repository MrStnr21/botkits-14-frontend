import { TFlowNodes } from '../../../../services/types/builder';

export const onCrmChangeFlow =
  ({ getNodes, setNodes, id }: TFlowNodes) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          const newItem = {
            ...item,
            data: {
              ...item.data,
              chosenCrm: e.target.value,
            },
          };
          return newItem;
        }
        return item;
      })
    );
  };

export const onSaveChangeFlow =
  ({ getNodes, setNodes, id }: TFlowNodes) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          const newItem = {
            ...item,
            data: {
              ...item.data,
              save: e.target.value,
            },
          };
          return newItem;
        }
        return item;
      })
    );
  };
