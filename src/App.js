import React, { Component } from 'react';

// data
import { posts } from './data';

// components
import Logo from './Logo';
import Switch from './common/Switch';
import Post from './Post';

// styles
const styles = {
  app: {
    maxWidth: '700px',
    padding: '20px',
    margin: '0 auto',
  },
  header: {
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  switch: {
    marginLeft: 'auto',
  },
};

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <header style={styles.header}>
          <Logo />
          <Switch
            leftOption="Light"
            rightOption="Dark"
            style={styles.switch}
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
