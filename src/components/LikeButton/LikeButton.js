import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: 0,
        color: 'purple',
      };
      this.colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    }
  
    backgroundColorChange = () => {
      const colorIndex = this.state.likes % this.colors.length;
    };
  
    likeHandler = () => {
      const nextColor = this.colors[(this.state.likes + 1) % this.colors.length];
      this.setState(() => ({
        likes: this.state.likes + 1,
        color: nextColor,
      }));
    };
  
    render() {
      return (
        <button
          onClick={this.likeHandler}
          style={{ backgroundColor: this.state.color }}
          className="likeBtn"
        >
          {this.state.likes} Likes
        </button>
      );
    }
  }

  
export { LikeButton };
