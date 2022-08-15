import React from 'react';
import {connect} from 'react-redux';
import './App.css';

import StudentsList from './components/StudentsList';
import FriendsList from './components/FriendsList';

class App extends React.Component {
  async componentDidMount() {
    const response = await fetch('http://hp-api.herokuapp.com/api/characters/students');
    const parsedStudents = await response.json();

    this.props.dispatch({
      type: 'updateStudents',
      payload: parsedStudents
    })
  }


  render() {
    return (
      <div>
        <header>
          <h1>&#x1F3F0; Hogwarts Social Network</h1>
        </header>
        <main>
          <StudentsList />
          <FriendsList />
        </main>
      </div>
    )
  }
}

export default connect()(App);
