import { FC } from 'react';
import { useMediaQuery } from '@mui/material';
import VideoCard from '../../../../../video-card/video-card';

export type TUploadedVideoProps = {
  blob: Blob;
  onRemove: () => void;
};

const UploadedVideo: FC<TUploadedVideoProps> = ({ blob, onRemove }) => {
  const isMobile = useMediaQuery('(max-width: 620px)');
  const src = URL.createObjectURL(blob);
  return (
    <VideoCard
      hover
      size={isMobile ? 'sx' : 'm'}
      previewType="video"
      title="title"
      prewiew={src}
      src={src}
      onRemove={onRemove}
    />
  );
};

export default UploadedVideo;
