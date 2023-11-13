import { ReactFlowProvider } from 'reactflow';
import SavingToCrmBlock from './saving-to-crm';

export default {
  title: 'COMPONENTS/Builder/blocks/SavingToCrmBlock',
  component: SavingToCrmBlock,
};

export const Default = () => (
  <ReactFlowProvider>
    <SavingToCrmBlock
      data={{
        name: 'CRMBlock',
        crmList: ['1', '2', '3'],
        chosenCrm: '',
      }}
    />{' '}
  </ReactFlowProvider>
);
