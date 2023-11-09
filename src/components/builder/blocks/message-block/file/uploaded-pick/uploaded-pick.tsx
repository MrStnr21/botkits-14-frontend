import { FC } from 'react';
import VideoCard from '../../../../../video-card/video-card';

export type TUploadedPictureProps = {
  src: string;
};

const UploadedPicture: FC<TUploadedPictureProps> = ({ src }) => {
  return (
    <VideoCard contentType="image" title="title" prewiew={src} src={src} />
  );
};

export default UploadedPicture;
