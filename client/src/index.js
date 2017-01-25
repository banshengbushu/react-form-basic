import React from 'react';
import ReactDom from 'react-dom';
import '../style/index.less';
import CreatedPaper from './Components';

ReactDom.render(
  <CreatedPaper/>,
  document.getElementById('app')
);