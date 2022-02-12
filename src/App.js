import React from 'react';
import boxes from './boxes.json';

export default function App() {
  const [boxArray, setBoxArray] = React.useState(boxes);
  
  const boxDivs = boxArray.map(box => {
    return (<div key={box.id} className="box" />);
  });

  return (
    <div className="container">
      {boxDivs}
    </div>
  );
};