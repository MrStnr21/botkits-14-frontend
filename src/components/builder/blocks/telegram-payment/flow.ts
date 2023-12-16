import { TFlowNodes } from '../../../../services/types/builder';

export const setDataButtonFlow =
  ({ getNodes, setNodes, id }: TFlowNodes) =>
  ({ selectors, value }: { selectors: string[]; value: any }) => {
    const nodes = getNodes();
    const finalData = value;
    setNodes(
      nodes.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              [selectors[0]]: finalData,
            },
          };
        }
        return item;
      })
    );
  };

export const addFileFlow =
  ({ getNodes, setNodes, id }: TFlowNodes) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              image: e.target.files && e.target.files[0],
            },
          };
        }
        return item;
      })
    );
    e.target.value = '';
  };

export const removeFileFlow =
  ({ getNodes, setNodes, id }: TFlowNodes) =>
  () => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              image: '',
            },
          };
        }
        return item;
      })
    );
  };
