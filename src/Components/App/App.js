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

    const positiveAverage =
      ((this.state.good + 0.0000001) / (totalFeddbacks + 0.0000001)) * 100;

    this.statData = {
      ...this.state,
      ...{ total: totalFeddbacks, positive: positiveAverage },
    };
    console.log(positiveAverage);
    console.log(this.statData);
    return (
      <Container>
        <Title>Plaese leave feedback</Title>
        <Buttons buttons={this.allButtons} onClick={this.handleClick}></Buttons>
        <TitleStat value={positiveAverage} total={totalFeddbacks}>
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
