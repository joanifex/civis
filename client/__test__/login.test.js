import React from 'react';
import Login from '../components/Login.js';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './helpers/store';

test('Component is rendered', () => {
  const component = renderer.create(
    <Provider store={store({})}>
      <Login />
   </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
