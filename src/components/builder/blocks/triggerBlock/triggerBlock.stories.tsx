import TriggerBlock from './triggerBlock';

export default {
  title: 'COMPONENTS/Builder/blocks/TriggerBlock',
  component: TriggerBlock,
};

export const Default = () => <TriggerBlock isOpened close={() => {}} />;
