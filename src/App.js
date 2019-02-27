import React, { Component } from 'react';

// styles
import styles from './App.module.css';

// data
import { posts } from './data';

// components
import Logo from './Logo';
import Switch from './common/Switch';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <Logo />
          <Switch
            leftOption="Light"
            rightOption="Dark"
            className={styles.switch}
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
