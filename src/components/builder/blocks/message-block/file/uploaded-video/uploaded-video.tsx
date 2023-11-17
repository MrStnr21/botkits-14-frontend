import { FC } from 'react';
import VideoCard from '../../../../../video-card/video-card';

export type TUploadedVideoProps = {
  file: File | undefined;
  onRemove: () => void;
};

const UploadedVideo: FC<TUploadedVideoProps> = ({ file, onRemove }) => {
  const src = URL.createObjectURL(file!);

  return (
    <VideoCard
      hover
      previewType="video"
      title="title"
      prewiew={src}
      src={src}
      onRemove={onRemove}
    />
  );
};

export default UploadedVideo;
