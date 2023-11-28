import { FC, useMemo /* useEffect */ } from 'react';
import { useReactFlow, useNodeId /* useStore */ } from 'reactflow';
import Input from '../../../../../ui/inputs/input/input';

export type THardBlockProps = {
  id: string;
};

const HardMode: FC<THardBlockProps> = ({ id }) => {
  // Костыль1 для ререндеринга
  // const [input, setInput] = useState(false);
  const { getNodes, setNodes } = useReactFlow();
  const idNode = useNodeId();
  const nodes = getNodes();
  const node = nodes.filter((el) => el.id === idNode)[0];

  const itemFromVariables = useMemo(
    () =>
      node.data.variables.filter((item: { id: string }) => item.id === id)[0],
    [node]
  );
  // Костыль2 для ререндеринга
  /* const { domNode } = useStore((s) => s);
  useEffect(() => {}, [domNode]); */

  const setItemVariables = (
    idItem: string,
    key: 'id' | 'type' | 'variable' | 'sign' | 'condition' | 'targetBlock',
    value: any
  ) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === idNode) {
          return {
            ...item,
            data: {
              ...item.data,
              variables: node.data.variables.map(
                (elem: { [x: string]: any; id: string }) => {
                  if (elem.id === idItem) {
                    // eslint-disable-next-line no-param-reassign
                    elem[key] = value;
                  }
                  return elem;
                }
              ),
            },
          };
        }
        return item;
      })
    );
  };

  const setCondition = (value: any) => {
    setItemVariables(id, 'condition', value);
    // setInput(!input);
  };

  const content = useMemo(
    () => (
      <Input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCondition(event.target.value)
        }
        styled="bot-builder-default"
        placeholder="Условие"
        value={itemFromVariables.condition}
        minLength={0}
        required={false}
      />
    ),
    [node]
  );

  return content;
};

export default HardMode;
