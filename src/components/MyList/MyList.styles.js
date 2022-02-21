import styled from 'styled-components';
import imgBackgroundPaper from './../../images/paper.png';
import imgIconAdd from './../../images/plus-add.svg';
import imgButtonEraser from './../../images/eraser.png';

const StyledToDoList = styled.div`
  margin-top: 3rem;
  padding: 1.5rem;
  width: 16rem;
  transform: rotate(-1deg);
  background: url(${imgBackgroundPaper}) no-repeat;
  background-size: cover;
`;

const StyledH1 = styled.h1`
  font-family: 'Sriracha', sans-serif;
  text-align: center;
  margin: 0 0 1rem 0;
  opacity: 70%;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding-left: 0;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const StyledRuledSection = styled.div`
  width: 100%;
  display: flex;
  flex-basis: 100%;
  border-bottom: 1px solid gray;
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

const StyledButtonAdd = styled(StyledButton)`
  background: url(${imgIconAdd}) no-repeat;
  opacity: 70%;
`;

const StyledButtonDeleteAll = styled(StyledButton)`
  position: relative;
  top: 4rem;
  left: 4rem;
  transform: rotate(5deg);
  margin: 0;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  width: 12rem;
  height: 4rem;
  font-family: 'Lilita One', sans-serif;
  font-size: 1.5rem;
  color: white;
  background: url(${imgButtonEraser}) no-repeat;
  background-size: cover;
`;

export {
  StyledToDoList, StyledH1, StyledUl, StyledForm, StyledRuledSection, StyledInput,
  StyledButton, StyledButtonAdd, StyledButtonDeleteAll
};
