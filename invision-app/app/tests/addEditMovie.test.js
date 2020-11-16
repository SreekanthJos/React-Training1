
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { AddEditMovie } from '../components/addEditMovie';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
const store = mockStore({});

let props = {  
  close: jest.fn(),
  onSubmit:jest.fn()
};

describe('Add Edit Movie popup:', () => {
  test('should render Add Edit Movie popup', () => {
    const searchBar = TestRenderer.create(<Provider store={store}><AddEditMovie {...props}/></Provider>);
    const json = searchBar.toJSON();
    expect(json).toMatchSnapshot();
  })
});