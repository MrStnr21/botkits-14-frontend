import { FC, useEffect, useState } from 'react';
import { useNodeId } from 'reactflow';
import UploadedVideo from './uploaded-video/uploaded-video';
import UploadedPicture from './uploaded-pick/uploaded-pick';
import UploadedDock from './uploaded-doc/uploaded-doc';
import UploadedAudio from './uploaded-audio/uploaded-audio';
import { removeFileFlow } from '../flow';
import { BASE_URL } from '../../../../../utils/config';
import { getFile } from '../../../../../api/builder';
import { addFileToRemove } from '../../../utils';

type TdataProps = {
  fileId: string;
  fileType: string;
  fileName?: string;
};

const File: FC<TdataProps> = ({ fileId, fileType, fileName }) => {
  const [file, setFile] = useState<Blob | null>(null);
  const removeFileF = removeFileFlow();
  const id = useNodeId() || '';

  useEffect(() => {
    getFile(`${BASE_URL}/bots/files/download/${fileId}`).then((data) => {
      setFile(data);
    });
  }, []);

  const removeFile = () => {
    addFileToRemove('1', id);
    removeFileF(fileId);
  };
  return (
    <>
      {file && fileType.includes('video') && (
        <UploadedVideo blob={file} onRemove={removeFile} />
      )}
      {file && fileType.includes('image') && (
        <UploadedPicture blob={file} onRemove={removeFile} />
      )}
      {file && fileType.includes('application') && (
        <UploadedDock blob={file} fileName={fileName} onRemove={removeFile} />
      )}
      {file && fileType.includes('audio') && (
        <UploadedAudio blob={file} fileName={fileName} onRemove={removeFile} />
      )}
    </>
  );
};

export default File;
