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
    this.likeHandler = this.likeHandler.bind(this);
    this.dislikeHandler = this.dislikeHandler.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0,
      animateButton: "no-animation"
    };
  }

  likeHandler(e) {
    const buttonPressed = e.target;
    buttonPressed.classList.toggle("animate");
    this.setState(
      prevState => ({
        count: prevState.count + 1
      }),
      () => setTimeout(() => buttonPressed.classList.toggle("animate"), 200)
    );
  }

  dislikeHandler(e) {
    const buttonPressed = e.target;
    buttonPressed.classList.toggle("animate");
    this.setState(
      prevState => ({
        count: prevState.count - 1
      }),
      () => setTimeout(() => buttonPressed.classList.toggle("animate"), 200)
    );
  }

  reset() {
    const app = this.app;
    this.app.classList.toggle("flash");
    this.setState(
      () => ({
        count: 0
      }),
      () => setTimeout(() => app.classList.toggle("flash"), 2000)
    );
  }

  updateMessage() {
    console.log(this.state.count);
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
    return newMessage;
  }

  render() {
    return (
      <div
        className="rate-app"
        ref={app => {
          this.app = app;
        }}
      >
        <Heading1>{this.props.title}</Heading1>
        <RateButton clickAction={this.likeHandler} type="like" />
        <RateButton clickAction={this.dislikeHandler} type="dislike" />
        <ContextInfoMessage icon={<InfoIkon />}>
          {this.updateMessage()}
        </ContextInfoMessage>
        <ButtonGroup>
          <SecondaryButton onClick={this.reset}>Tilbakestill</SecondaryButton>
        </ButtonGroup>
      </div>
    );
  }
}

export default RateApp;
