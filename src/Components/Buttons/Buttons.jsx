import { StyledWraper, StyledBtn } from './Buttons.styled';
import PropTypes from 'prop-types';
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
Buttons.propTypes = {
  buttons: PropTypes.array,
};
