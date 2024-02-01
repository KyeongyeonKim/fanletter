import React, { useEffect, useState } from "react";

function Fanletters() {
  const [fanlettersData, setFanlettersData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/fakeData.json")
      .then((response) => response.json())
      .then((json) => {
        setFanlettersData([...json]);
        return console.log(json);
      });
  }, []);

  return (
    <div>
      <p>
        {fanlettersData.map((letters) => {
          return (
            <div style={{ border: "1px solid red" }}>
              <ul key={letters.id}>
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
