import { ReactFlowProvider } from 'reactflow';
import ButtonStart from './button-start';

export default {
  title: 'COMPONENTS/Builder/other-components/blocks/button-start',
  component: ButtonStart,
};

export const Default = () => (
  <ReactFlowProvider>
    <ButtonStart data={{ type: 'start' }} />{' '}
  </ReactFlowProvider>
);
