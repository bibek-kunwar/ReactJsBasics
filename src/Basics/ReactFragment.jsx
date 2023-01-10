import React from 'react'
import   './Css/style.css'
const name = "Bibek";
const Cast = "kunwar";
let currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
// currDate = currDate.getHours();
// let greeting = '';
// if (currDate >= 1 && currDate < 12) {
//   greeting = 'Good morning';
// } else if(currDate >= 12 && currDate <19){
//   greeting = 'Good Night';
// } else {
//   greeting = 'Good evening';
// }
const ReactFragment = () => {
  return (
    <>
      {/* A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.


      if we see in console we find <div id="root"></div> in  index.html we find  two div
       i.e children to elemente that we use a react fragment
       remove extra div of root and remove one div and make faster than div

      */}

        {/*
         <ReactFragment>
        <h1>my name is bibek kunwar</h1>
        <h2>Am from Achham </h2>
        <h3>i love criecket </h3>
        </ReactFragment>
        Note: we aslo use <> </> inspite of react fragment
        */}

        <h1>my name is bibek kunwar</h1>
        <h2>Am from Achham </h2>
        <h3>i love criecket </h3>
      {/*  heading paragrah list example  */}
      <h1>Am heading 1</h1>
      <p>What is ReactJS used for?
        The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript
      </p>
      <h2>list example </h2>
      <ol>
        <li>bibek </li>
        <li>Hira </li>
        <li>waran </li>
        <li>kali</li>
      </ol>

      <h1>react expresson</h1>
      <h3>my name is {name}</h3>

      {/* if we use Name outside curly braces name is not print
        and the code inside a curly braces is react expression
        inside curly braces only expression used not statment return

        js ===> html ===>js = expression
      */ }


      <h1>Tempelets example</h1>
      <h2>my name is {`${name} ${Cast}` }</h2> {/* back tick is used  */}


      <p>current date is = {currDate} </p>
      <p> current time is = {currTime}</p>

      <h1>jsx attributes </h1>
      {/* herf gives the attributes in react js so it is called react js
      simply it is like a html attributes   */}
      <img src="https://picsum.photos/200/300" alt="love pic" />

      <div className="Css_import">
        <h1>hey this effect is due to css</h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis soluta laudantium quibusdam, illum ex nobis maxime dolorum cupiditate, nemo est molestiae enim totam atque. Cumque fugiat veritatis officia autem sit.

        </p>

      </div>


      {/* <div className="Greeting">
        <p> Hellow babs {greeting} </p>
      </div> */}



    </>
  )
}

export default ReactFragment