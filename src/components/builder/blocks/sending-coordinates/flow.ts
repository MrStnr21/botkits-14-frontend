/* eslint-disable import/prefer-default-export */
import { TFlowNodes } from '../../../../services/types/builder';
import { rangeForCoordinates } from '../../utils/data';

export const validateAndSaveFlow =
  ({ getNodes, setNodes, id }: TFlowNodes) =>
  (type: 'longitude' | 'latitude') =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.startsWith('.') || !e.target.value.startsWith(',')) {
      if (/^-?\d*[.,]?\d*$/.test(e.target.value)) {
        const newValue = e.target.value.replace(/,/g, '.');
        const valueArr = newValue.split('.');
        const int = Number(valueArr[0]);
        const fractialPart = valueArr[1];

        // eslint-disable-next-line @typescript-eslint/no-shadow
        const save = (type: 'longitude' | 'latitude', newValue: string) => {
          setNodes(
            getNodes().map((item) => {
              if (item.id === id) {
                const newItem = {
                  ...item,
                  data: {
                    ...item.data,
                    coordinates:
                      type === 'longitude'
                        ? [newValue, ...item.data.coordinates.slice(1)]
                        : [...item.data.coordinates.slice(0, 1), newValue],
                  },
                };
                return newItem;
              }
              return item;
            })
          );
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
