import React from 'react';
import boxes from './boxes.json';
import Box from './components/Box';

export default function App(props) {
  const [boxArray, setBoxArray] = React.useState(boxes);

  const boxElements = boxArray.map(box => {
    return (<Box key={box.id} on={box.on} />);
  });

  return (
    <div className="container">
      {boxElements}
    </div>
  );
};