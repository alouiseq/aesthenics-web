import React from 'react';
import { action } from '@storybook/addon-actions'
import { MemoryRouter} from 'react-router-dom';

import ButtonLink from './ButtonLink';

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  decorators: [storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>]
};

export const BtnLink = () => <ButtonLink label="Takes me somewhere" path={action('clicked')} style={{fontWeight: 'bold'}} />;
