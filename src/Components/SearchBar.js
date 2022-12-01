import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const [input, setInput] = useState("");

  const filterData = props.countries.filter((country) => {
    if (input.length > 0) {
      return country.name.toLowerCase().match(input);
    }
    
  });

  return (
    <div>
      {filterData.map((item) => {
        return (
          <tr>
            <td> {item.name}</td>
            
          </tr>
        );
      })}
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="form">
            <input
              type="text"
              className="form-control form-input"
              placeholder="Search ..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default SearchBar;
