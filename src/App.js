import React, { Component } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components/macro';

// data
import { posts } from './data';

// components
import Logo from './Logo';
import Switch from './common/Switch';
import Post from './Post';

// styled
const GlobalStyles = createGlobalStyle`
  ${css`${require('normalize.css/normalize.css')}`}

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
  }

  div {
    box-sizing: border-box;
  }
`;

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
      <>
        <GlobalStyles />
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
      </>
    );
  }
}

export default App;
