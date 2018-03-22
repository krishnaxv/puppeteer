import React, { Component } from 'react';
import axios from 'axios';
import { map } from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    };
  }
  //   componentDidMount() {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then(function(response) {
  //         this.setState({
  //           postList: response
  //         });
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   }
  render() {
    return (
      <main>
        <h1 style={{ color: '#f00' }}>Hola</h1>
        <div>
          {map(this.props.postList, (item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        </div>
      </main>
    );
  }
}

export default App;
