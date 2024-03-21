import { FC } from 'react';
import { useMediaQuery } from '@mui/material';
import VideoCard from '../../../../../video-card/video-card';

export type TUploadedPictureProps = {
  blob: Blob;
  onRemove: () => void;
};

const UploadedPicture: FC<TUploadedPictureProps> = ({ blob, onRemove }) => {
  const isMobile = useMediaQuery('(max-width: 620px)');
  const src = URL.createObjectURL(blob);
  return (
    <VideoCard
      contentType="image"
      title="title"
      size={isMobile ? 'sx' : 'm'}
      prewiew={src}
      src={src}
      onRemove={onRemove}
    />
  );
};

export default UploadedPicture;
