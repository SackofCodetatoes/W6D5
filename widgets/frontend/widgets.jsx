import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
class Root extends React.Component {
  render() {
    return (<div><img height="50%" width="50%" src="./okay.gif"/><Clock /><Tabs /></div>);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
