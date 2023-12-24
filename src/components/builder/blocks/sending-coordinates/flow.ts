/* eslint-disable import/prefer-default-export */
import { rangeForCoordinates } from '../../utils/data';
import useFlow from '../../use-flow';
import { saveNode } from '../../utils';

export const validateAndSaveFlow = () => {
  const { getNodes, setNodes, id, getNode } = useFlow();
  return (type: 'longitude' | 'latitude') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.value.startsWith('.') || !e.target.value.startsWith(',')) {
        if (/^-?\d*[.,]?\d*$/.test(e.target.value)) {
          const newValue = e.target.value.replace(/,/g, '.');
          const valueArr = newValue.split('.');
          const int = Number(valueArr[0]);
          const fractialPart = valueArr[1];

          // eslint-disable-next-line @typescript-eslint/no-shadow
          const save = (type: 'longitude' | 'latitude', newValue: string) => {
            const node = getNode(id)!;
            const value =
              type === 'longitude'
                ? [newValue, ...node.data.coordinates.slice(1)]
                : [...node.data.coordinates.slice(0, 1), newValue];

            saveNode({
              setNodes,
              getNodes,
              node,
              id,
              path: ['data', 'coordinates'],
              value,
            });
          };

          const rangeValidate = () => {
            if (
              (newValue.length > 2 &&
                type === 'longitude' &&
                (int < rangeForCoordinates.longitude.min ||
                  int > rangeForCoordinates.longitude.max)) ||
              (newValue.length > 1 &&
                type === 'latitude' &&
                (int < rangeForCoordinates.latitude.min ||
                  int > rangeForCoordinates.latitude.max))
            ) {
              return false;
            }
            return true;
          };

          if (valueArr[0].length < 4 && rangeValidate()) {
            if (newValue.includes('.') && fractialPart) {
              if (fractialPart.length < 6) save(type, newValue);
            } else {
              save(type, newValue);
            }
          }
        }
      }
    };
};
