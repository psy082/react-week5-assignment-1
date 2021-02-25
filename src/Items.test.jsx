import React from 'react';

import { render } from '@testing-library/react';

import Items from './Items';

import regions from '../fixtures/region';

test('Items', () => {
  const { queryByText } = render((
    <Items items={regions} />
  ));

  expect(queryByText(/서울/)).not.toBeNull();
  expect(queryByText(/한식/)).not.toBeNull();
});
