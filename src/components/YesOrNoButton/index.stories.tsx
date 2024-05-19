import { SelectedType } from '@/types';
import YesOrNoButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof YesOrNoButton> = {
  component: YesOrNoButton,
};

export default meta;

type Story = StoryObj<typeof YesOrNoButton>;

export const Primary: Story = {};

export const SelectedYes: Story = {
  args: { selectedButton: SelectedType.YES },
};

export const SelectedNo: Story = {
  args: { selectedButton: SelectedType.NO },
};
