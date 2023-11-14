import { FC } from 'react';
import UploadedVideo from './uploaded-video/uploaded-video';
import UploadedPicture from './uploaded-pick/uploaded-pick';
import UploadedDock from './uploaded-doc/uploaded-doc';
import UploadedAudio from './uploaded-audio/uploaded-audio';

type TdataProps = {
  data?: File;
};

const File: FC<TdataProps> = ({ data }) => {
  return (
    <>
      {data && data.type.includes('video') && <UploadedVideo file={data} />}
      {data && data.type.includes('image') && (
        <UploadedPicture src={URL.createObjectURL(data)} />
      )}
      {data && data.type.includes('text') && (
        <UploadedDock name={data.name} size={data.size} />
      )}
      {data && data.type.includes('audio') && (
        <UploadedAudio src={URL.createObjectURL(data)} name={data.name} />
      )}
    </>
  );
};

export default File;
