import React from "react";
import RateButton from "../../components/RateButton/RateButton";

class RateApp extends React.Component {
  constructor(props) {
    super(props);
    this.likeHandler = this.likeHandler.bind(this);
    this.dislikeHandler = this.dislikeHandler.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }

  likeHandler() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  dislikeHandler() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  reset() {
    this.setState(() => ({
      count: 0
    }));
  }

  updateMessage() {
    const count = this.state.count;
    let adjective;
    if (count < -5) {
      adjective = "virkelig hater";
    } else if (count < 0) {
      adjective = "misliker";
    } else if (count === 0) {
      adjective = "er nøytrale til";
    } else if (count > 5) {
      adjective = "virkelig digger";
    } else if (count > 0) {
      adjective = "liker";
    }
    const newMessage = `Brukerne ${adjective} appen`;
    return newMessage;
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <RateButton clickAction={this.likeHandler} type="like" />
        <RateButton clickAction={this.dislikeHandler} type="dislike" />
        <div>{this.updateMessage()}</div>
        <button onClick={this.reset}>Tilbakestill</button>
      </div>
    );
  }
}

export default RateApp;
