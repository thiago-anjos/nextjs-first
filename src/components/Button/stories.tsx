import { Story } from '@storybook/react/types-6-0';
import CustomButton from './Button';

export default {
  title: 'Button',
  component: CustomButton,
  args: {
    title: 'default',
    variant: 'contained',
  },
};

export const Primary: Story = (args) => <CustomButton {...args} />;
Primary.args = {
  color: 'primary',
};

export const Secondary: Story = (args) => <CustomButton {...args} />;
Secondary.args = {
  color: 'secondary',
};
