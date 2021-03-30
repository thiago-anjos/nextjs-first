import { Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core';

function CustomButton({ title, ...args }: ButtonProps) {
  return <Button {...args}>{title}</Button>;
}

export default CustomButton;
