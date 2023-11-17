import { FC } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import UploadedVideo from './uploaded-video/uploaded-video';
import UploadedPicture from './uploaded-pick/uploaded-pick';
import UploadedDock from './uploaded-doc/uploaded-doc';
import UploadedAudio from './uploaded-audio/uploaded-audio';
import {
  MessageDataTypes,
  TMessageBlockData,
} from '../../../../../services/types/builder';

type TdataProps = {
  data: File;
};

const File: FC<TdataProps> = ({ data }) => {
  const { setNodes, getNodes } = useReactFlow();
  const id = useNodeId();
  const removeFile = () =>
    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              data: item.data.data.filter((media: TMessageBlockData) => {
                return (
                  media.type !== MessageDataTypes.file ||
                  media.file.name !== data.name
                );
              }),
            },
          };
        }
        return item;
      })
    );
  return (
    <>
      {data && data.type.includes('video') && (
        <UploadedVideo file={data} onRemove={removeFile} />
      )}
      {data && data.type.includes('image') && (
        <UploadedPicture
          src={URL.createObjectURL(data)}
          onRemove={removeFile}
        />
      )}
      {data && data.type.includes('text') && (
        <UploadedDock name={data.name} size={data.size} onRemove={removeFile} />
      )}
      {data && data.type.includes('audio') && (
        <UploadedAudio
          src={URL.createObjectURL(data)}
          name={data.name}
          onRemove={removeFile}
        />
      )}
    </>
  );
};

export default File;
