import React from "react";
import Form from "next/form";
import { Search } from "lucide-react";
import ResetButton from "./ResetButton";
const SearchForm = ({ query }: { query?: string }) => {
  //console.log(query);
  return (
    <div>
      <Form action={"/"} scroll={false} className="search-form">
        <input
          placeholder="Explore"
          defaultValue={query}
          name="query"
          type="text"
          className="search-input"
        />
        <div className="flex gap-2">
          {query && <ResetButton />}
          <button type="submit" className="search-btn">
            <Search className="text-white cursor-pointer" />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
