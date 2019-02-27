import React, { Component } from 'react';
import classNames from 'classnames';

// styles
import styles from './Post.module.css';

// components
import Switch from '../common/Switch';

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
          className={classNames(
            styles.post,
            { [styles.read]: isRead },
          )}
        >
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <Switch
              leftOption={isRead ? 'Unread' : 'Read'}
              onChange={this.toggleRead}
              className={styles.switch}
            />
          </header>
          <h5 className={styles.author}>{author}</h5>
          <p className={styles.excerpt}>{excerpt}</p>
        </div>
        <div className={styles.divider} />
      </>
    );
  }
}
  
export default Post;