import styled from '@emotion/styled';

export const Container = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 0 auto;
  background-color: white;
  border-radius: 4px;
  box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  padding: 70px;
`;
export const Title = styled.h1`
  font-size: 26px;
  color: #05bb3f;
  text-align: center;
`;
export const TitleStat = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 23px;
  font-weight: 700;
  width: 100%;
  color: ${({ value, theme }) => {
    if (value >= 75) {
      return theme.green;
    }
    if (value < 75 && value > 45) {
      return theme.grey;
    }
    if (value <= 45 && value > 0) {
      return theme.red;
    }
    if (value === 0) {
      return theme.grey;
    }
  }};
`;

export const StyleNoStats = styled.p`
  color: ${props => props.theme.grey};
`;
