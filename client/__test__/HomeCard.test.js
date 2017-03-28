import React from 'react';
import { connect } from 'react-redux';
import AddressForm from './AddressForm';
import RepIndexCard from './RepIndexCard';
import { updateReps } from '../actions/reps'

test ( 'HomeCard component is rendered', () => {
  const component = renderer.create(
    <Provider store={store({})}>
      <HomeCard />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
