import React from 'react';
// import { render } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

test('renders App exists in the document', () => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  debugger

  expect(result.type).toBe('div');
});
