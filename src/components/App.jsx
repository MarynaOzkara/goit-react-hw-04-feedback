import React, { Component } from "react";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from "./Notification/Notification";
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  handleFeedback = state => {
    // console.log(state);
      this.setState(prevState => ({
         [state]: prevState[state] +1,
      }))
  }
  handleTotal = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  }
  countPercentage = () => {
    const {good} = this.state;
    const totalFeedback = this.handleTotal();
    return Math.round((good / totalFeedback) * 100) || 0;
  }
  render() {
    const {good, neutral, bad} = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.handleTotal();
    const percentage = this.countPercentage();
    return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={options} 
          onFeedbackClick={this.handleFeedback}/>
      </Section>
      <Section title="Statistics">{
        totalFeedback !== 0 ?
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad}
          total={totalFeedback}
          positivePercentage={percentage}/> 
          :  
        <Notification message="There is no feedback" />
      }
        
      </Section>  
    </Container>
    )
  }
}

