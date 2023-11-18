import { FC } from 'react';
import { useMediaQuery } from '@mui/material';
import VideoCard from '../../../../../video-card/video-card';

export type TUploadedVideoProps = {
  src: string;
  onRemove: () => void;
};

const UploadedVideo: FC<TUploadedVideoProps> = ({ src, onRemove }) => {
  const isMobile = useMediaQuery('(max-width: 520px)');
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
