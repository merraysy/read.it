import React, { Component } from 'react';

// components
import Switch from '../common/Switch';

// styles
const styles = {
  post: {
    padding: '20px 0',
    position: 'relative',
  },
  postRead: {
    opacity: .25,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  title: {
    color: 'tomato',
    textTransform: 'capitalize',
    flexGrow: 1,
    margin: 0,
  },
  switch: {
    marginLeft: 'auto',
  },
  author: {
    margin: 0,
    fontStyle: 'italic',
  },
  excerpt: {
    color: 'gray',
  },
  divider: {
    width: '30%',
    borderBottom: '1px solid tomato',
    position: 'relative',
    margin: '0 auto',
  },
};

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
        <div
          className={`Post ${isRead && 'read'}`}
          style={{
            ...styles.post,
            ...(isRead && styles.postRead),
          }}
        >
          <header style={styles.header}>
            <h1 style={styles.title}>{title}</h1>
            <Switch
              leftOption={isRead ? 'Unread' : 'Read'}
              onChange={this.toggleRead}
              style={styles.switch}
            />
          </header>
          <h5 style={styles.author}>{author}</h5>
          <p style={styles.excerpt}>{excerpt}</p>
        </div>
        <div style={styles.divider} />
      </>
    );
  }
}
  
export default Post;