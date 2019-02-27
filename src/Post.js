import React, { Component } from 'react';

// components
import Switch from './Switch';

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
        <div className={`Post ${isRead && 'read'}`}>
          <header className="Post-header">
            <h1 className="Post-title">{title}</h1>
            <Switch
              leftOption={isRead ? 'Unread' : 'Read'}
              onChange={this.toggleRead}
              className="Post-switch"
            />
          </header>
          <h5 className="Post-author">{author}</h5>
          <p className="Post-excerpt">{excerpt}</p>
        </div>
        <div className="Post-divider" />
      </>
    );
  }
}
  
export default Post;