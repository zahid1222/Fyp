import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Content = styled.div`
margin-bottom:300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #ccc;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;


const Home = styled(Link)`
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

const Thanks = () => {
  return (
    <Container>
      <Content>
        <Title>Thanks For Using Our Website</Title>
        <SubTitle>Your Reservation Has Been Created</SubTitle>
        <SubTitle>You will be updated soon!!!!!</SubTitle>
        <center><Home to='/Main'>Go To Home</Home></center>
      </Content>
    </Container>
  );
};

export default Thanks