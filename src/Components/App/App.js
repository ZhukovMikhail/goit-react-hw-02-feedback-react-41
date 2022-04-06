import './App.styled.jsx';
import React, { Component } from 'react';
import { Container, Title, TitleStat, StyleNoStats } from './App.styled';
import { Buttons } from '../Buttons/Buttons.jsx';
import { Statistics } from '../Statistics/Statistics.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  allButtons = Object.keys(this.state);
  statData = {};
  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  render() {
    const values = Object.values(this.state);
    const totalFeddbacks = values.reduce((acc, value) => {
      return acc + value;
    }, 0);
    let positiveAverage = Number(
      ((this.state.good / totalFeddbacks) * 100).toFixed(2),
    );
    if (Number.isNaN(positiveAverage)) {
      positiveAverage = 0;
    }
    this.statData = {
      ...this.state,
      ...{ total: totalFeddbacks, positive: positiveAverage },
    };
    return (
      <Container>
        <Title>Plaese leave feedback</Title>
        <Buttons buttons={this.allButtons} onClick={this.handleClick}></Buttons>
        <TitleStat value={positiveAverage}>
          Statstics:
          {totalFeddbacks !== 0 ? (
            <Statistics data={this.statData}></Statistics>
          ) : (
            <StyleNoStats>No feedback given</StyleNoStats>
          )}
        </TitleStat>
      </Container>
    );
  }
}
export default App;
