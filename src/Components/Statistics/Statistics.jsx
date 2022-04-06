import { StyledStat } from './Statistics.styled';
export const Statistics = ({ data }) => {
  return (
    <StyledStat>
      <p>
        good:<span>{data.good}</span>
      </p>
      <p>
        neutral:<span>{data.neutral}</span>
      </p>
      <p>
        bad:<span>{data.bad}</span>
      </p>
      <p>
        Total:<span>{data.total}</span>
      </p>
      <p>
        Positive feedback:
        <span>{Number(data.positive.toFixed(1))}% </span>
      </p>
    </StyledStat>
  );
};
