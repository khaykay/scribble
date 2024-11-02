import React, { useEffect, useState } from "react";

const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];
function ArrayManipulation() {
  let newId = 3;
  const [name, setName] = useState("");
  const [pos, setPos] = useState(null);
  const [names, setNames] = useState(initialArtists);
  const handleChange = (e) => {
    let type = e.target.type;
    let value = e.target.value;
    if (type == "text") {
      setName(value);
    } else {
      setPos(Number(value));
    }
  };
  const handlePosition = () => {
    setNames([
      ...names.slice(0, pos),
      { id: newId, name: name },
      ...names.slice(pos),
    ]);
    newId++;
  };
  //   useEffect(() => {
  //     console.log(name, pos);
  //     console.log(typeof pos);
  //   }, [name, pos]);
  return (
    <div className="bg-gray-700 mt-48 h-36">
      <input type="text" name="" id="" value={name} onChange={handleChange} />
      <button onClick={handlePosition}>insert at</button>
      <input type="number" name="" id="" value={pos} onChange={handleChange} />
      {names.map((n) => {
        return <div key={n.id}>{n.name}</div>;
      })}
    </div>
  );
}

export default ArrayManipulation;
