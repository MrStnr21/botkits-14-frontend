import type { Meta, StoryObj } from '@storybook/react';
import InputSelect from './input-select';
import equalImage from '../../../images/icon/24x24/variables/equal.svg';
import notEqualImage from '../../../images/icon/24x24/variables/equal-not.svg';
import noCaseEqualImage from '../../../images/icon/24x24/variables/equal without case.svg';
import inLineNoCaseImage from '../../../images/icon/24x24/variables/in line without case.svg';
import inLineImage from '../../../images/icon/24x24/variables/in line.svg';
import lessOrEqualImage from '../../../images/icon/24x24/variables/less or equal.svg';
import lessImage from '../../../images/icon/24x24/variables/less.svg';
import moreOrEqualImage from '../../../images/icon/24x24/variables/more or equal.svg';
import moreImage from '../../../images/icon/24x24/variables/more.svg';
import notInLineWithoutCaseImage from '../../../images/icon/24x24/variables/not in line without case.svg';
import notInLineImage from '../../../images/icon/24x24/variables/not in line.svg';

const meta: Meta<typeof InputSelect> = {
  title: 'COMPONENTS/Fields/InputSelect',
  component: InputSelect,
};

export default meta;
type Story = StoryObj<typeof InputSelect>;

export const InputSelectDefault: Story = {
  args: {
    values: [
      { nameValue: 'выбор 1', value: '1' },
      { nameValue: 'выбор 2', value: '2' },
      { nameValue: 'выбор 3', value: '3' },
    ],
    defaultValue: ['1'],
    maxWidth: 240,
    handleFunction: (payload) => console.log(payload),
  },
};

export const InputSelectMultiple: Story = {
  args: {
    values: [
      { nameValue: 'выбор 1', value: '1' },
      { nameValue: 'выбор 2', value: '2' },
      { nameValue: 'выбор 3', value: '3' },
    ],
    defaultValue: ['1'],
    maxWidth: 240,
    handleFunction: (payload) => console.log(payload),
    multiple: true,
  },
};

export const InputSelectIcons: Story = {
  args: {
    values: [
      {
        nameValue: equalImage,
        value: '1',
        isIcon: true,
        iconDescription: 'Равно',
      },
      {
        nameValue: notEqualImage,
        value: '2',
        isIcon: true,
        iconDescription: 'Не равно',
      },
      {
        nameValue: moreImage,
        value: '3',
        isIcon: true,
        iconDescription: 'Больше',
      },
      {
        nameValue: moreOrEqualImage,
        value: '4',
        isIcon: true,
        iconDescription: 'Больше или равно',
      },
      {
        nameValue: lessImage,
        value: '5',
        isIcon: true,
        iconDescription: 'Меньше',
      },
      {
        nameValue: lessOrEqualImage,
        value: '6',
        isIcon: true,
        iconDescription: 'Меньше или равно',
      },
      {
        nameValue: noCaseEqualImage,
        value: '7',
        isIcon: true,
        iconDescription: 'Равно (без учёта регистра)',
      },
      {
        nameValue: inLineNoCaseImage,
        value: '8',
        isIcon: true,
        iconDescription: 'Входит в строку (без учёта регистра)',
      },
      {
        nameValue: inLineImage,
        value: '9',
        isIcon: true,
        iconDescription: 'Входит в строку',
      },
      {
        nameValue: notInLineWithoutCaseImage,
        value: '10',
        isIcon: true,
        iconDescription: 'Не входит в строку (без учёта регистра)',
      },
      {
        nameValue: notInLineImage,
        value: '11',
        isIcon: true,
        iconDescription: 'Не входит в строку',
      },
    ],
    defaultValue: ['1'],
    maxWidth: 52,
    handleFunction: (payload) => console.log(payload),
  },
};
