import React, { Component } from 'react';
import styled from 'styled-components/macro';

// data
import { posts } from './data';

// components
import Logo from './Logo';
import Switch from './common/Switch';
import Post from './Post';

// styled
const Wrapper = styled.div`
  max-width: 700px;
  padding: 20px;
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const HeaderSwitch = styled(Switch)`
  margin-left: auto;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo />
          <HeaderSwitch
            leftOption="Light"
            rightOption="Dark"
          />
        </Header>
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              {...post}
            />
          ))}
        </main>
      </Wrapper>
    );
  }
}

export default App;
