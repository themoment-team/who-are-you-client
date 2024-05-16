import CardModal from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CardModal> = {
  component: CardModal,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof CardModal>;

export const Theme1: Story = {
  args: {
    currentTheme: 1,
  },
};

export const Theme2: Story = {
  args: {
    currentTheme: 2,
  },
};

export const Theme3: Story = {
  args: {
    currentTheme: 3,
  },
};
