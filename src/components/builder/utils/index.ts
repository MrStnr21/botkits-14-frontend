/* import { Instance } from 'reactflow'; */

export const getTimeDHMS = (time: number) => {
  const s = Math.floor(time % 60);
  const m = Math.floor((time / 60) % 60);
  const h = Math.floor((time / (60 * 60)) % 24);
  const d = Math.floor(time / (60 * 60 * 24));

  return {
    s,
    m,
    h,
    d,
  };
};

export const getSeconds = ({ s, m, h, d }: { [key: string]: number }) => {
  return s + m * 60 + h * 60 * 60 + d * 60 * 60 * 24;
};

export const getTimeMS = (s: number) => {
  const minutes = String(Math.floor(s / 60));
  const seconds = String(Math.floor(s % 60));
  return `${minutes}:${seconds.length === 2 ? seconds : `0${seconds}`}`;
};

export const setFlowData = (
  selector: string,
  id: string,
  getNodes: Instance.GetNodes<any>,
  setNodes: Instance.SetNodes<any>
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const nodes = getNodes();
    const node = nodes.find((item) => item.id === id);
    node!.data[selector] = e.target.value;
    setNodes(
      nodes.map((item) => {
        if (item.id === id) {
          return { ...node! };
        }
        return item;
      })
    );
  };
};

export default {};
