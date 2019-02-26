import React, { Component } from 'react';
import './Switch.css';

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
    } = this.props;
    const isLeft = this.state.activeSide === 'left';

    return (
      <div className={`Switch ${className}`}>
        <div className="Switch-option">{leftOption}</div>
        <div
          className="Switch-box"
          onClick={this.handleClick}
        >
          <div
            className={`Switch-mark ${isLeft ? 'left' : 'right'}`}
            style={isLeft ? { left: 0 } : { right: 0 }}
          />
        </div>
        <div className="Switch-option">{rightOption}</div>
      </div>
    );
  }
}

export default Switch;