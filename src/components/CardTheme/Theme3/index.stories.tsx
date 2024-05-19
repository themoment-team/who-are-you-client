import Theme3 from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Theme3> = {
  component: Theme3,
};

export default meta;

type Story = StoryObj<typeof Theme3>;

export const Primary: Story = {
  args: {
    name: '김재균',
    phoneNumber: '010-1234-5678',
    email: 's23005@gsm.hs.kr',
    mbti: 'ESTP',
    instagram: 'jxx_gyun',
  },
};
