import React from 'react';
import {Component} from 'react';
import ReactDom from 'react-dom';
import '../style/index.less';
import CreatedPaper from './containers';
import {connect, Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js';
import {Router, Route, browserHistory} from 'react-router';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

class Index extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={CreatedPaper}/>
      </Router>
    )
  }
}

const mapStateToProps = (state) => state;

let RootApp = connect(mapStateToProps)(Index);

ReactDom.render(
  <Provider store={store}>
    <RootApp/>
  </Provider>,
  document.getElementById('app'));