import configureMockStore from 'redux-mock-store';


const store = (model) => {
  const mockStore = configureMockStore();
  return mockStore(model)
}

export default store;
