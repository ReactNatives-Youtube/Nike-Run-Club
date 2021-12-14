import React from 'react';
import type {Node} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from './src/store/reducer';
import MainNavigation from './src/navigations/MainNavigation';
// Main store for redux
const store = createStore(reducer, applyMiddleware(ReduxThunk));

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
