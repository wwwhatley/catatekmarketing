import styled, { css } from "styled-components";

export const Title1 = styled.h1`
  color: red;
  font-size: 2.2em;
  margin: 0.5em 0;
`;

export const Title2 = styled.h2`
  color: ${props => (props.white ? "#fff" : "#C93F50")};
  font-size: 60px;
  font-family: "Raleway", sans-serif;
`;

export const ContentTitle = styled.h2`
  font-size: 3.75em;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#754D63"};
  margin: ${props => (props.content1 ? "0 0 0 2.5em" : "0 2.5em 0 0")};
  @media (max-width: 700px) {
    margin: 0 1em;
    font-size: 2.2em;
  }
`;

export const Row = styled.div`
  display: flex;
  width: ${props => props.width};
  margin: ${props => props.margin};
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  position: relative;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  margin: ${props => props.margin};
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Text = styled.p`
  color: ${props => (props.white ? "#fff" : "#47566e")};
  font-size: 28px;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  line-height: ${props => props.lineheight || "2.4em"};
  margin: ${props => props.margin || "0"};
  @media (max-width: 768px) {
    font-size: 1em;
    line-height: 1.8em;
  }
  ${props =>
    props.small &&
    css`
      color: #fff;
      font-size: 22px;
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      line-height: 2em;
      @media (max-width: 525px) {
        font-size: 14px;
        line-height: 1.6em;
      }
    `};
  ${props =>
    props.large &&
    css`
      color: #fff;
      font-size: 48px;
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      line-height: 1.8em;
      @media (max-width: 768px) {
        font-size: 24px;
        line-height: 1.6em;
      }
    `};
  ${props =>
    props.nav &&
    css`
      font-size: 18px;
      padding: 0.1em 1.25em;
      font-weight: 400;
      cursor: pointer;
      border: ${props =>
        props.colored ? ".5px solid transparent" : "0.5px solid #ccc;"}
      border-left: ${props => props.leftborder && "0px"};
      color: ${props => props.colored && "#fff"};
      background-color: ${props => (props.colored ? "#c93f50" : "#fff")};
      font-weight: ${props => props.colored && "600"};
      transition: 450ms;
      &:hover {
        background-color: ${props => (props.colored ? "#d46774" : "#f2f5f7")};
      }
    `};
  ${props =>
    props.services &&
    css`
      font-size: 16px;
      margin: 0 0.5em;
      font-weight: 600;
      color: #fff;
      @media (max-width: 525px) {
        font-size: 14px;
      }
    `};
  ${props =>
    props.bio &&
    css`
      font-size: 16px;
      font-weight: 400;
      color: #47566e;
      line-height: 1.8em;
      @media (max-width: 768px) {
        margin-bottom: 1.5em;
      }
    `};
  ${props =>
    props.usertitle &&
    css`
      font-size: 24px;
      font-weight: 400;
      color: #c93f50;
      margin: 0.25em 0;
    `};
`;

export const Line = styled.div`
  width: 125px;
  height: 14px;
  opacity: 0.95;
  border-radius: 3px;
  position: absolute;
  bottom: ${props => props.bottom};
  @media (max-width: 1350px) {
    display: none;
  }

  ${props =>
    props.primary &&
    css`
      left: 0;
      background-color: #c93f50;
    `};
  ${props =>
    props.secondary &&
    css`
      right: 0;
      background-color: #fff;
    `};
`;
