import React from 'react';
import AddressForm from '../components/AddressForm.js';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './helpers/store';

test('AddressForm is rendered', () => {
  const component = renderer.create(
    <Provider store={store({})}>
      <AddressForm />
   </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
