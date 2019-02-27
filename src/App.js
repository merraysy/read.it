import React, { Component } from 'react';
import './App.css';

// data
import { posts } from './data';

// components
import Logo from './Logo';
import Switch from './Switch';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Switch
            leftOption="Light"
            rightOption="Dark"
            className="App-header-switch"
          />
        </header>
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              {...post}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
