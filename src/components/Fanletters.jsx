import React from "react";
// import fakeData from "../assets/fakeData.json";

function Fanletters({ letters, selectedMember }) {
  const filteredFanletters = letters.filter(
    (fanletter) => fanletter.writedTo === selectedMember
  );

  return (
    <div>
      <p>
        {filteredFanletters.map((letters) => {
          return (
            <div key={letters.id} style={{ border: "1px solid red" }}>
              <ul>
                <li>{letters.writedTo}</li>
                <li>{letters.nickname}</li>
                <li>{letters.createdAt}</li>
                <li>{letters.content}</li>
              </ul>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default Fanletters;
