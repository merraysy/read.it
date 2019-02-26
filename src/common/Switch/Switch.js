import React, { Component } from 'react';

// styles
const styles = {
  switch: {
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
  },
  option: {
    fontSize: '1.5vmin',
    color: 'gray',
  },
  rightOption: {
    marginLeft: 10,
  },
  leftOption: {
    marginRight: 10,
  },
  box: {
    width: 42,
    height: 22,
    outline: '1px solid grey',
    position: 'relative',
    cursor: 'pointer',
  },
  mark: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 0,
    margin: 1,
  },
  rightMark: {
    backgroundColor: 'tomato',
    right: 0,
  },
  leftMark: {
    backgroundColor: 'tomato',
    left: 0,
  },
};

class Switch extends Component {
  static defaultProps = {
    onChange: function () {},
  };

  constructor(props) {
    super(props);
      
    this.state = {
      activeSide: 'left',
    };
  }

  handleClick = () => this.setState(({ activeSide }) => ({
    activeSide: activeSide === 'left' ? 'right' : 'left',
  }), () => this.props.onChange(this.state.activeSide));
  
  render() {
    const {
      leftOption,
      rightOption,
      className,
      style,
    } = this.props;
    const isLeft = this.state.activeSide === 'left';

    return (
      <div
        className={className}
        style={{
          ...styles.switch,
          ...style,
        }}
      >
        <div
          style={{
          ...styles.option,
          ...styles.leftOption,
          }}
        >
          {leftOption}
        </div>
        <div
          style={styles.box}
          onClick={this.handleClick}
        >
          <div
            style={{
              ...styles.mark,
              ...(isLeft ? styles.leftMark : styles.rightMark),
            }}
          />
        </div>
        <div
          style={{
            ...styles.option,
            ...styles.rightOption,
          }}
        >
          {rightOption}
        </div>
      </div>
    );
  }
}

export default Switch;