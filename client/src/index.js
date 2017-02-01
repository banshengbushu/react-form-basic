import React from 'react';
import ReactDom from 'react-dom';
import '../style/index.less';
import CreatedPaper from './containers';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js';
import {Router,browserHistory, IndexRoute, withRouter} from 'react-router';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

class Index extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <IndexRoute component={CreatedPaper}/>
      </Router>
    )
  }
}

const mapStateToProps = (state) => state;

let RootApp = connect(mapStateToProps)(withRouter(Index));

ReactDom.render(
  <Provider store={store}>
    <RootApp/>
  </Provider>,
  document.getElementById('app'));