import { TFlowNodes } from '../../../../services/types/builder';

type TaddFileFlow = TFlowNodes & {
  idVariable: string;
};

const addFileFlow =
  ({ getNodes, setNodes, id, idVariable }: TaddFileFlow) =>
  () => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              variables: [
                ...item.data.variables,
                {
                  id: idVariable,
                  variable: '',
                  value: '',
                },
              ],
            },
          };
        }
        return item;
      })
    );
  };

export default addFileFlow;
