import React, { Component } from 'react';

class Genk extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      genkNews: [],
     }
  }
  componentDidMount() {
    fetch('http://localhost:2308/genk')
      .then(response => response.json())
      .then(genkNews => this.setState({ genkNews }));
  }
  render() { 
    // map((anObjectMapped, index) => {
    //   return (
    //       <p key={`${anObjectMapped.name}_{anObjectMapped.email}`}>
    //           {anObjectMapped.name} - {anObjectMapped.email}
    //       </p>
    //   )
    const { genkNews } = this.state;
    return ( 
      <ul>
          {
            genkNews.map((item, index) =>
              <li key={index}><a href={item.href}>{item.text}</a></li>
            )
          }
      </ul>
    );
  }
}
 
export default Genk;