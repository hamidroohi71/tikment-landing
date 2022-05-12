import React from "react";
import SearchIcon from "./search.svg";

export default function Search() {
  return (
    <section>
      <input type="text" placeholder="جستجو کن" />
      <img src={SearchIcon} alt="search" />
    </section>
  );
}
