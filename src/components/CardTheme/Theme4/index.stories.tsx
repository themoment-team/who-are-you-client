import Theme4 from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Theme4> = {
  component: Theme4,
};

export default meta;

type Story = StoryObj<typeof Theme4>;

export const Primary: Story = {
  args: {
    name: '김재균',
    phoneNumber: '010-1234-5678',
    email: 's23005@gsm.hs.kr',
  },
};
