import React, { useState, useEffect, useRef } from "react";
import SearchShip from "./SearchShip";

const Search = ({ users, setUsers }) => {
  const [chipData, setChipData] = useState("");

  const [chipDataList, setChipDataList] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    filterChips(chipDataList);
  }, [chipDataList]);

  // filter users
  const filterChips = (filterList) => {
    let filteredUsers = users.filter((user) => {
      let { role, level, languages, tools, location, contract, position } =
        user;

      let filters = [
        role,
        level,
        ...languages,
        ...tools,
        location,
        contract,
        position,
      ];
      filters = filters.map((elem) => elem.toLowerCase());

      let bool = chipDataList.map((chipFilter) => filters.includes(chipFilter));

      if (!bool.includes(false)) {
        return true;
      }
    });

    setUsers(filteredUsers);
  };

  // clear the search chips list
  const handleClear = () => {
    setChipDataList([]);
  };
  // handle delete a chip
  const handleClose = (e) => {
    const chipElem = e.target.parentElement.dataset.chip;
    console.log(e.target.parentElement.dataset.chip);

    setChipDataList(chipDataList.filter((chip) => chip !== chipElem));
    console.log(chipDataList);
  };

  // handle enter key click
  const handleClick = (e) => {
    if (e.key === "Enter") {
      setChipDataList([...chipDataList, chipData.toLowerCase()]);
      setChipData("");
      console.log(chipDataList, chipData);
    }
  };

  // focus the input when click the search container
  const handleFocus = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };

  return (
    <div className="search">
      <div className="search-container" onClick={handleFocus}>
        <div className="searchChips">
          {chipDataList.map((elem) => (
            <SearchShip chip={elem} key={elem} handleClose={handleClose} />
          ))}

          <input
            type="text"
            id="text"
            name="input-chip-data"
            ref={inputRef}
            autoFocus={true}
            // placeholder="Filter..."
            value={chipData}
            onChange={(e) => {
              setChipData(e.target.value);
            }}
            onKeyDown={handleClick}
          />
        </div>

        <div className="clear" onClick={handleClear}>
          Clear
        </div>
      </div>
    </div>
  );
};

export default Search;
