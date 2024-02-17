import TriggerBlock from './triggerBlock';

export default {
  title: 'COMPONENTS/Builder/other-components/blocks/TriggerBlock',
  component: TriggerBlock,
};

export const Default = () => <TriggerBlock isOpened close={() => {}} />;
