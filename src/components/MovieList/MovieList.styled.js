import styled from "styled-components";
import {Link  } from "react-router-dom";

export const ListMovies = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Movie = styled.li`
    display: flex;
    gap: 10px;
    text-align: center;
`;

export const MovieLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;

  :hover {
    color: purple;
  }   
`;