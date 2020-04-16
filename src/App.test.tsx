import React from 'react';
// import { render } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

test('checks that App exists in the document', () => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result.props.className).toBe('main-app');
});
