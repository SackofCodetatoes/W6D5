import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_tab: 0
    };
    // this.current_tab = this.current_tab.bind(this);
  }

  render(){



    return (
      <div className="tabs">

        <ul>
          <h1>Tab1</h1>
          <h1>Tab2</h1>
          <h1>Tab3</h1>
          <article></article>
        //   <li>
        //     <img src="./tab1.gif"/>
        //   </li>
        </ul>
      </div>
    );

  }
  componentDidMount() {

  }

  componentWillUnmount() {

  }
}

export default Tabs;
