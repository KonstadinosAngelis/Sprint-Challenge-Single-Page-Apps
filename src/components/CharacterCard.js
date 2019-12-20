import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function CharacterCard(props) {
  return(
    <Wrapper>
      <Card>
        <CardImg src = {props.data.image} alt = {props.data.name}/>
        <CardBody>
          <CardTitle>Name :{props.data.name}</CardTitle>
          <CardSubtitle>Species :{props.data.species}</CardSubtitle>
          <CardText>Origin :{props.data.origin.name}</CardText>
        </CardBody>
      </Card>
    </Wrapper>
  )}
