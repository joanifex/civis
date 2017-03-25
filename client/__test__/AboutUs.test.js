import React from 'react';
import AboutUs from '../components/AboutUs.js';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './helpers/store';

test('AboutUs Component is rendered', () => {
  const component = renderer.create(
    <Provider store={store({})}>
      <AboutUs />
   </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
