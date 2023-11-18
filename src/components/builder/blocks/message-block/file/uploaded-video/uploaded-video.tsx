import { FC } from 'react';
import VideoCard from '../../../../../video-card/video-card';

export type TUploadedVideoProps = {
  src: string;
  onRemove: () => void;
};

const UploadedVideo: FC<TUploadedVideoProps> = ({ src, onRemove }) => {
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
