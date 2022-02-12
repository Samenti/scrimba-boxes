import React from 'react';
import boxes from './boxes.json';
import Box from './components/Box';

export default function App(props) {
  const [boxArray, setBoxArray] = React.useState(boxes);

  function toggle(id) {
    setBoxArray(prevBoxArray => {
      const newArray = [...prevBoxArray];
      // *** this finds the right index of the box with 'id': ***
      // const index = newArray.findIndex(
      //   element => element.id == id
      // );
      // newArray[index].on = !newArray[index].on;
      // *** this needs the boxes in the json array to keep order: ***
      newArray[id-1].on = !newArray[id-1].on
      return (newArray);
    });
  }

  const boxElements = boxArray.map(box => {
    return (
      <Box 
        key={box.id}
        id={box.id}
        on={box.on}
        toggle={()=>toggle(box.id)}
      />
     );
  });

  return (
    <div className="container">
      {boxElements}
    </div>
  );
};