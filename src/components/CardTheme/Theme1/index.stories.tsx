import Theme1 from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Theme1> = {
  component: Theme1,
};

export default meta;

type Story = StoryObj<typeof Theme1>;

export const Primary: Story = {
  args: {
    name: '김재균',
    major: 'Front End',
    phoneNumber: '010-1234-5678',
    email: 's23005@gsm.hs.kr',
    mbti: 'ESTP',
    sns: 'jxx_gyun',
  },
};
