import React from 'react';
import Footer from '../components/Footer.js';
import renderer from 'react-test-renderer';

test('Footer component is rendered',  () => {
  const component = renderer.create(
    <Footer />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
