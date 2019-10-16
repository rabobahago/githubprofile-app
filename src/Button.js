import React, {Component} from 'react';
class Button extends Component{
  render(){
    const handleClick = ()=>this.props.onClickFunc(this.props.increaseValue)
    return(
      <div>
        <button onClick={handleClick}>
          +{this.props.increaseValue}
          </button>
      </div>
    );
  }
}
export default Button;