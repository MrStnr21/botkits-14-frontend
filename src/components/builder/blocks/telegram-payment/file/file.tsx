import { FC, useMemo } from 'react';
// import { useReactFlow, useNodeId } from 'reactflow';
import UploadedPicture from '../../message-block/file/uploaded-pick/uploaded-pick';

type TdataProps = {
  data: File;
  removeFile: () => void;
};

const File: FC<TdataProps> = ({ data, removeFile }) => {
  // const { setNodes, getNodes } = useReactFlow();
  // const id = useNodeId();
  const src = useMemo(() => URL.createObjectURL(data), [data]);
  /* const removeFile = () =>
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          // eslint-disable-next-line no-param-reassign
          delete item.data.image;
          return item;
        }
        return item;
      })
    ); */

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data && data.type.includes('image') && (
        <UploadedPicture src={src} onRemove={removeFile} />
      )}
    </>
  );
};

export default File;
