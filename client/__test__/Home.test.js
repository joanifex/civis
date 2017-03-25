import React from 'react';
import Home from '../components/Home';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './helpers/store';

test( 'Home component is rendered', () => {
  const component = renderer.create(
    <Provider store={store({})}>
      <Home />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
