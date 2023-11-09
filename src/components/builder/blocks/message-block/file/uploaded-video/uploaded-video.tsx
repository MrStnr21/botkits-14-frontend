import { FC } from 'react';
import VideoCard from '../../../../../video-card/video-card';

export type TUploadedVideoProps = {
  file: File | undefined;
};

const UploadedVideo: FC<TUploadedVideoProps> = ({ file }) => {
  const src = URL.createObjectURL(file!);

  return (
    <VideoCard
      hover
      previewType="video"
      title="title"
      prewiew={src}
      src={src}
    />
  );
};

export default UploadedVideo;
