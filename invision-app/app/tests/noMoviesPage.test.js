
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { NoMoviesPage } from '../components/noMoviesPage';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
const store = mockStore({});

let props = {
  searchState: '',
  setSearchState: jest.fn(),
  fetchMovies: jest.fn(),
  setOrderState: jest.fn(),
  setGenreState: jest.fn()
};

describe('no movies page:', () => {
  test('should render No movies page', () => {
    const searchBar = TestRenderer.create(<Provider store={store}><NoMoviesPage {...props} /></Provider>);
    const json = searchBar.toJSON();
    expect(json).toMatchSnapshot();
  })
});