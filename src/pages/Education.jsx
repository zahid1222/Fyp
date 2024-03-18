import React from 'react'
import styled from 'styled-components';
import { StyledForm,StyledInput,StyledTitle } from './style';
import { Link } from 'react-router-dom';

const CreateNextButton = styled(Link)`
margin-top:30px;
  text-decoration:none;
  background-color: #3e3e3f;
  color: #fff;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #04a49b;
  }
`;

const Education = () => {
    return (
      <StyledForm>
      <StyledTitle>Education</StyledTitle>
      <StyledInput type="text" placeholder="Degree" />
      <StyledInput type="text" placeholder="Major" />
      <StyledInput type="text" placeholder="University" />
      <StyledInput type="date" placeholder="Graduation Date" />
      <CreateNextButton to='/Skills'>Next</CreateNextButton>
      {/* Other form fields */}
    </StyledForm>
    );
  };

export default Education
