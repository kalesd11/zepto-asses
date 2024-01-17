import React, { useState } from "react";
import "./Chip.css";

const Chips = () => {
  const [searchName, setsearchName] = useState("");
  const [chips, setChips] = useState([]);
  const [focus, setFocus] = useState(false);
  const [users, setusers] = useState([
    ["Nick Gian", "NickGian@email.com"],
    ["Narayan Gamer", "NarayanGamer@email.com"],
    ["Anita Gros", "AnitGros@email.com"],
    ["Megan Smith", "MeganSmith@email.com"],
    ["Rupa Jha", "RupaJha@email.com"],
    ["Saddam Deshmukh", "SaddamDeshmukh@email.com"],
    ["John Doe", "JohnDoe@email.com"],
    ["Michel Stove", "MichelStove@email.com"],
    ["Jimmy Hong", "JimmyHong@email.com"],
  ]);

  const handleInputChange = (e) => {
    setsearchName(e.target.value);
  };

  const handleItemClick = (item) => {
    setChips([...chips, item]);
    setusers(users.filter((i) => i !== item));
    setsearchName("");
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter((c) => c !== chip));
    setusers([...users, chip]);
  };

  const handleFocus = () => {
    if (searchName.length == 0) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };
  return (
    <div className="box-container">
      <div className="box bg-green-100 rounded-md">
        {/* Chips Building */}
        <div className="chips px-8 pt-4">
          {chips.map((chip, index) => (
            <div key={index} className="chip text-white font-bold bg-green-400">
              {chip[0]}
              <span
                className="chip-remove"
                onClick={() => handleChipRemove(chip)}
              >
                x
              </span>
            </div>
          ))}
          <input
            type="text"
            value={searchName}
            onChange={handleInputChange}
            onFocus={handleFocus}
            placeholder="Type to search"
            className="input rounded-md mx-2 gap-2"
          />
        </div>

        {/* Suggestions Part */}
        {searchName.length ? (
          <div className="item-list font-semibold">
            {users
              .filter((item) =>
                item[0].toLowerCase().includes(searchName.toLowerCase())
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="item"
                  onClick={() => handleItemClick(item)}
                >
                  {item[0]} <span className="font-light mx-2">{item[1]}</span>
                </div>
              ))}
          </div>
        ) : (
          <div className="item-list font-semibold">
            {focus
              ? users.map((item) => {
                  return (
                    <div
                      key={Math.random()}
                      className="item"
                      onClick={() => handleItemClick(item)}
                    >
                      {item[0]} <span className="font-light mx-2">{item[1]}</span>
                    </div>
                  );
                })
              : ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chips;
