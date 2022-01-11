import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistic from '../statistic/Statistic';
import Section from '../section/Section';
import Notification from '../notificationMessage/Notification ';
import s from './Feedback.module.css';

class Feedback extends Component {
  static propTypes = {
    state: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercent;
    const total = this.state.good + this.state.neutral + this.state.bad;
    positiveFeedbackPercent =
      total === 0 ? 0 : Math.round((this.state.good * 100) / total);
    return positiveFeedbackPercent + '%';
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <div className={s.container}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
