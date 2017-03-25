import React from 'react';
import ContentWrapper from '../components/ContentWrapper.js';
import renderer from 'react-test-renderer';


test('Component is rendered', () => {
  const component = renderer.create(
      <ContentWrapper />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
