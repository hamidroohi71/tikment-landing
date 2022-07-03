import React from "react";
import SearchIcon from "./search.svg";
import styled from "styled-components";

export default function Search() {
  return (
    <SearchElement>
      <input type="text" placeholder="جستجو کن" />
      <img src={SearchIcon} alt="search" />
    </SearchElement>
  );
}

const SearchElement = styled.section`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 9px 75px 9px 14px;
  margin-left: 25px;
  height: 40px;
  width: 22vw;

  & > input {
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.2vw;
    flex-grow: 1;

    &::placeholder {
      color: #cbcbcb;
      font-size: 1.2vw;
      font-weight: 300;
    }
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
