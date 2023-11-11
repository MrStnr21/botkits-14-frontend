import { ReactFlowProvider } from 'reactflow';
import SavingToCrmBlock from './saving-to-crm';

export default {
  title: 'COMPONENTS/Builder/blocks/SavingToCrmBlock',
  component: SavingToCrmBlock,
};

export const Default = () => (
  <ReactFlowProvider>
    <SavingToCrmBlock data={{ name: 'test name' }} />{' '}
  </ReactFlowProvider>
);
