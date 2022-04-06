import styled from '@emotion/styled';

export const StyledWraper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledBtn = styled.button`
  padding: 5px;
  font-size: 20px;
  border-radius: 4px;
  width: 75px;
  color: white;
  &:hover {
    box-shadow: 4px 3px 4px 1px rgba(155, 155, 155, 0.75);
  }
  background-color: ${props => {
    let color;
    switch (props.name) {
      case 'good':
        color = props.theme.green;
        break;
      case 'neutral':
        color = props.theme.grey;
        break;
      case 'bad':
        color = props.theme.red;
        break;
      default:
    }
    return color;
  }};
`;
