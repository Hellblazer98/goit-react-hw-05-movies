import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    display: flex;
    margin-top: 20px;
    flex-direction:column;
    list-style-type: none;
    gap: 10px;
`;

export const LinkDetails = styled(Link)`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid grey;
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-weight: 500;

  :hover {
    background-color: lightblue;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }    
`;



export const CastList = styled.ul`
  --items: 6;
  --gap: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  padding: 50px;
  list-style: none;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - var(--gap) * (var(--items) - 1)) / var(--items));
`;

export const CastImage = styled.img`
  width: 200px; 
`;

