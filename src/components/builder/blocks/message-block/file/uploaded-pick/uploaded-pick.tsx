import { FC } from 'react';
import VideoCard from '../../../../../video-card/video-card';

export type TUploadedPictureProps = {
  src: string;
  onRemove: () => void;
};

const UploadedPicture: FC<TUploadedPictureProps> = ({ src, onRemove }) => {
  return (
    <VideoCard
      contentType="image"
      title="title"
      prewiew={src}
      src={src}
      onRemove={onRemove}
    />
  );
};

export default UploadedPicture;
