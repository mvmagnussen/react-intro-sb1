import React from "react";
import RateButton from "../../components/RateButton/RateButton";
import "./RateApp.less";
import { ButtonGroup, SecondaryButton } from "@sb1/ffe-buttons-react";
import { Heading1 } from "@sb1/ffe-core-react";
import { ContextInfoMessage } from "@sb1/ffe-context-message-react";
import { InfoIkon } from "@sb1/ffe-icons-react";

class RateApp extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0,
      message: "Brukerne er nøytrale til appen"
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
    if (count < -10) {
      adjective = "får depresjon av";
    } else if (count < -5) {
      adjective = "virkelig hater";
    } else if (count < 0) {
      adjective = "misliker";
    } else if (count === 0) {
      adjective = "er nøytrale til";
    } else if (count > 10) {
      adjective = "er i ekstase over";
    } else if (count > 5) {
      adjective = "virkelig digger";
    } else if (count > 0) {
      adjective = "liker";
    }
    const newMessage = `Brukerne ${adjective} appen`;

    this.setState(() => ({
      message: newMessage
    }));
  }

  render() {
    return (
      <div className="rate-app">
        <Heading1>{this.props.title}</Heading1>
        <RateButton clickAction={this.increment} type="like" />
        <RateButton clickAction={this.decrement} type="dislike" />
        <ContextInfoMessage icon={<InfoIkon />}>
          {this.state.message}
        </ContextInfoMessage>
        <ButtonGroup>
          <SecondaryButton onClick={this.reset}>Tilbakestill</SecondaryButton>
        </ButtonGroup>
      </div>
    );
  }
}

export default RateApp;
