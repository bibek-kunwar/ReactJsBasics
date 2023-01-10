import React from 'react'

let currDate = new Date();
currDate = currDate.getHours();
let greeting = '';
if (currDate >= 1 && currDate < 12) {
  greeting = 'Good morning';
} else if(currDate >= 12 && currDate <19){
  greeting = 'Good Night';
} else {
  greeting = 'Good evening';
 }
const Lab = () => {
  return (
    <>

      <h1>Hey babs {greeting}</h1>
      <p>best wishes</p>

    </>
  )
}

export default Lab