import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tabs from './Tabs';
require('./styles.css');
require('typeface-roboto');

const API = `https://raw.githubusercontent.com/lastw/test-task/master/data/10-items.json`;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }
  }
  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ items: data.items }));
  }
  render() {
    const { items } = this.state;
    
    let styles = {
      root: {
        fontFamily: 'Roboto'
      }
    }

    return (
      <div style={styles.root}>
        <div class="main">
      <h1>Widget</h1>
     <Tabs>
      <div label="To read">
      {items.map(item =>
        <ul className="listBooks">
          <li key={item.id}>
          {item.author}
          <h2>{item.title}</h2>
          {item.description}
          {item.tags}
          </li>
        </ul>
      )}
      </div>
      <div label="In progress">
        
      </div>
      <div label="Done">
        
      </div>
    </Tabs>
    </div>
    </div>
    );
  }
}

export default App;
