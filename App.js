import React from 'react';
import type {Node} from 'react';
import MainNavigation from './src/navigations/MainNavigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './src/store/reducer';
import ReduxThunk from 'redux-thunk';
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
