import React from 'react';
import FlashMessage from '../components/FlashMessage.js';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './helpers/store';

test('FlashMessage is rendered', () => {
  const component = renderer.create(

    <Provider store={store({flash: {message: 'asdfsajl', msgType: 'sdfjalj'}})}>
      <FlashMessage />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
