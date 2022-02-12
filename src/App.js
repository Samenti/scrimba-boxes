import React from 'react';
import boxes from './boxes.json';
import Box from './components/Box';

export default function App(props) {
  const [boxArray, setBoxArray] = React.useState(boxes);

  function toggle(id) {
    setBoxArray(prevBoxArray => {
      return prevBoxArray.map((box) => {
        return box.id === id ? {...box, on: !box.on} : box
      });
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