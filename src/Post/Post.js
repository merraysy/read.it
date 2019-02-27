import React, { Component } from 'react';
import styled from 'styled-components/macro';

// components
import Switch from '../common/Switch';

// styled
const Wrapper = styled.div`
  padding: 20px 0;
  position: relative;
  opacity: ${props => props.read ? .25 : 1};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  color: tomato;
  text-transform: capitalize;
  flex-grow: 1;
  margin: 0;
`;

const PostSwitch = styled(Switch)`
  margin-left: auto;
`;

const Author = styled.h5`
  margin: 0;
  font-style: italic;
`;

const Excerpt = styled.p`
  color: gray;

  &::first-letter {
    text-transform: uppercase;
    font-size: 2vmin;
    font-weight: 700;
  }
`;

const Divider = styled.div`
  width: 30%;
  border-bottom: 1px solid tomato;
  position: relative;
  margin: 0 auto;

  &:last-of-type {
    display: none;
  }
`;

class Post extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isRead: false,
    };
  }

  toggleRead = (side) => this.setState(() => ({ isRead: side === 'right' }));
  
  render() {
    const {
      title,
      excerpt,
      author,
    } = this.props;
    const { isRead } = this.state;
    
    return (
      <>
        <Wrapper read={isRead}>
          <Header>
            <Title>{title}</Title>
            <PostSwitch
              leftOption={isRead ? 'Unread' : 'Read'}
              onChange={this.toggleRead}
            />
          </Header>
          <Author>{author}</Author>
          <Excerpt>{excerpt}</Excerpt>
        </Wrapper>
        <Divider />
      </>
    );
  }
}
  
export default Post;