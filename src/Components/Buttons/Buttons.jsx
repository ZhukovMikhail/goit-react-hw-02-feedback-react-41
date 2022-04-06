import { StyledWraper, StyledBtn } from './Buttons.styled';
export const Buttons = ({ buttons, onClick }) => {
  return (
    <StyledWraper>
      {buttons.map(button => {
        return (
          <StyledBtn key={button} onClick={onClick} name={button}>
            {button}
          </StyledBtn>
        );
      })}
    </StyledWraper>
  );
};
