import { FC, useState } from 'react';
import UploadedVideo from './uploaded-video/uploaded-video';
import UploadedPicture from './uploaded-pick/uploaded-pick';
import UploadedDock from './uploaded-doc/uploaded-doc';
import UploadedAudio from './uploaded-audio/uploaded-audio';

type TFileProps = {
  data?: File;
};

const File: FC<TFileProps> = ({ data }) => {
  const [file, setFile] = useState(data);

  return (
    <>
      <article />
      {file && file.type.includes('video') && <UploadedVideo file={file} />}
      {file && file.type.includes('image') && (
        <UploadedPicture src={URL.createObjectURL(file)} />
      )}
      {file && file.type.includes('text') && (
        <UploadedDock name={file.name} size={file.size} />
      )}
      {file && file.type.includes('audio') && (
        <UploadedAudio src={URL.createObjectURL(file)} name={file.name} />
      )}
      {/* Разметка ниже - для теста работоспособности, удалю после реализации стора */}
      <p>Инпут для проверки</p>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files ? e.target.files[0] : data);
        }}
      />
    </>
  );
};

export default File;
