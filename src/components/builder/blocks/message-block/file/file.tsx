import { FC, useMemo } from 'react';
import UploadedVideo from './uploaded-video/uploaded-video';
import UploadedPicture from './uploaded-pick/uploaded-pick';
import UploadedDock from './uploaded-doc/uploaded-doc';
import UploadedAudio from './uploaded-audio/uploaded-audio';
import { removeFileFlow } from '../flow';

type TdataProps = {
  data: File;
};

const File: FC<TdataProps> = ({ data }) => {
  const src = useMemo(() => URL.createObjectURL(data), [data]);
  const removeFile = removeFileFlow();
  return (
    <>
      {data && data.type.includes('video') && (
        <UploadedVideo src={src} onRemove={() => removeFile(data)} />
      )}
      {data && data.type.includes('image') && (
        <UploadedPicture src={src} onRemove={() => removeFile(data)} />
      )}
      {data && data.type.includes('application') && (
        <UploadedDock
          name={data.name}
          size={data.size}
          onRemove={() => removeFile(data)}
        />
      )}
      {data && data.type.includes('audio') && (
        <UploadedAudio
          src={src}
          name={data.name}
          onRemove={() => removeFile(data)}
        />
      )}
    </>
  );
};

export default File;
