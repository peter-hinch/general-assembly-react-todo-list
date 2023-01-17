import styled from 'styled-components';
import imgBackgroundPaper from './../../images/paper.png';
import imgIconAdd from './../../images/plus-add.svg';
import imgButtonEraser from './../../images/eraser.png';

export const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledToDoList = styled.div`
  padding: 1.5rem;
  width: 16rem;
  transform: rotate(-1deg);
  background: url(${imgBackgroundPaper}) no-repeat;
  background-size: cover;
`;

export const StyledH1 = styled.h1`
  font-family: 'Sriracha', sans-serif;
  text-align: center;
  margin: 0 0 1rem 0;
  opacity: 70%;
`;

export const StyledUl = styled.ul`
  margin: 0;
  padding-left: 0;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledRuledSection = styled.div`
  width: 100%;
  display: flex;
  flex-basis: 100%;
  border-bottom: 1px solid gray;
`;

export const StyledInput = styled.input`
  width: 1.2rem;
  height: 1.2rem;
`;

export const StyledButton = styled.button`
  margin-left: 0.3rem;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  border: 0;
`;

export const StyledButtonAdd = styled(StyledButton)`
  background: url(${imgIconAdd}) no-repeat;
  opacity: 70%;
`;

export const StyledButtonDeleteAll = styled(StyledButton)`
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
