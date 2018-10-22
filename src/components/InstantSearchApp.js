import React from "react";
import { InstantSearch } from "react-instantsearch-dom";
import Search from "./Search";

const InstantSearchApp = () => {
  return (
    <InstantSearch
      appId="9958JOXBB7"
      apiKey="f1c44c72d37c0a18eaacf5096db727be"
      indexName="todos"
    >
      <Search />
    </InstantSearch>
  );
};

export default InstantSearchApp;
