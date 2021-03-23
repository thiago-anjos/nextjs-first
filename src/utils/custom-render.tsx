import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { render, RenderResult } from '@testing-library/react';
import theme from 'theme';

function CustomRender(children: React.ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

export default CustomRender;
