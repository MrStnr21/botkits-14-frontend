import { FC } from 'react';
// import { useReactFlow, useNodeId } from 'reactflow';
import UploadedPicture from '../../message-block/file/uploaded-pick/uploaded-pick';

type TdataProps = {
  data: File;
  removeFile: () => void;
};

const File: FC<TdataProps> = ({ data, removeFile }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data && data.type.includes('image') && (
        <UploadedPicture blob={data} onRemove={removeFile} />
      )}
    </>
  );
};

export default File;
