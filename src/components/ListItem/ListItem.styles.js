import styled from 'styled-components';
import imgIconDelete from './../../images/cross-delete.svg';

const StyledListItem = styled.li`
  list-style-type: none;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid gray;
  width: 100%;
  display: flex;
`;

const StyledInput = styled.input`
  width: 1.2rem;
  height: 1.2rem;
`;

const StyledButton = styled.button`
  margin-left: 0.3rem;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  border: 0;
`;

const StyledButtonDelete = styled(StyledButton)`
  box-sizing: border-box;
  background: url(${imgIconDelete}) no-repeat;
  opacity: 70%;
`;

export { StyledListItem, StyledInput, StyledButton, StyledButtonDelete };
