import { Container } from '@material-ui/core';
import React from 'react';

export type HeadingProps = {
  children: React.ReactNode;
};

function Footer({ children }: HeadingProps) {
  return <Container>{children}</Container>;
}

export default Footer;
