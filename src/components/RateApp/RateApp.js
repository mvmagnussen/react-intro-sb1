import React from "react";
import RateButton from "../../components/RateButton/RateButton";

class RateApp extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0,
      message: "Du er nøytral til appen"
    };
  }

  /* componentDidMount() {
    console.log("this app is up and running");
    this.setState(() => ({
      message: "Du er nøytral til appen"
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      this.updateMessage();
    }
  } */

  increment() {
    this.setState(
      prevState => ({
        count: prevState.count + 1
      }),
      this.updateMessage
    );
  }

  decrement() {
    this.setState(
      prevState => ({
        count: prevState.count - 1
      }),
      this.updateMessage
    );
  }

  reset() {
    this.setState(
      () => ({
        count: 0
      }),
      this.updateMessage
    );
  }

  updateMessage() {
    const count = this.state.count;
    let adjective;
    if (count < -5) {
      adjective = "virkelig hater";
    } else if (count < 0) {
      adjective = "misliker";
    } else if (count === 0) {
      adjective = "er nøytral til";
    } else if (count > 5) {
      adjective = "virkelig digger";
    } else if (count > 0) {
      adjective = "liker";
    }
    const newMessage = `Du ${adjective} appen`;

    this.setState(() => ({
      message: newMessage
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <RateButton clickAction={this.increment} type="like" />
        <RateButton clickAction={this.decrement} type="dislike" />
        <div>{this.state.message}</div>
        <button onClick={this.reset}>Tilbakestill</button>
      </div>
    );
  }
}

export default RateApp;
