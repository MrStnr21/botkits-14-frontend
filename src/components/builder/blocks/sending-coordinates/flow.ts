/* eslint-disable import/prefer-default-export */
import useFlow from '../../use-flow';
import { saveNode, validateCoordinateRange } from '../../utils';
import { coordinateRegExp } from '../../utils/data';

export const validateAndSaveFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (type: 'longitude' | 'latitude') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.value.startsWith('.') || !e.target.value.startsWith(',')) {
        if (coordinateRegExp.test(e.target.value)) {
          const newValue = e.target.value.replace(/,/g, '.');

          // eslint-disable-next-line @typescript-eslint/no-shadow
          const save = (type: 'longitude' | 'latitude', newValue: string) => {
            const node = getNode(id)!;
            const index = type === 'longitude' ? '0' : '1';

            saveNode({
              setNodes,
              getNodes,
              node,
              path: ['data', 'coordinates', index],
              value: newValue,
            });
          };

          if (validateCoordinateRange(newValue, type)) {
            save(type, newValue);
          }
        }
      }
    };
};
