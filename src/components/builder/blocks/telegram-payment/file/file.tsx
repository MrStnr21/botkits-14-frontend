import { FC, useMemo } from 'react';
// import { useReactFlow, useNodeId } from 'reactflow';
import UploadedPicture from '../../message-block/file/uploaded-pick/uploaded-pick';

type TdataProps = {
  data: File;
  removeFile: () => void;
};

const File: FC<TdataProps> = ({ data, removeFile }) => {
  const src = useMemo(() => URL.createObjectURL(data), [data]);

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
