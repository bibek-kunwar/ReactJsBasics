import React from 'react'
import Sdata from './Sdata'
function Card(props) {
  return (
    <>
      <h1 className="heading_style">Avengers all series upto 2022</h1>
    <div className="cards">
        <div className="card">
        <img src={ props.imgscr} alt="Avengers__Pic" className="card__img" />
          <div className="card__info">
            <span className="card__catagory"></span>{props.title}
          <h3><div className="card_title">{ props.sname}</div></h3>
            <a href="props.link" target="blank"><button>Watch Now</button></a>
          </div>
        </div>
      </div>
      </>
  )

}

const PropsEx = () => {
  return (
    <>
      {/* <Card imgscr="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
      title="Avengers Series"
      sname="Avengers End Game"
      link="https://youtu.be/TcMBFSGVi1c" */}

      <
        Card
      imgscr={Sdata[0].imgscr}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}

      />

      {/*comment sections are belong to prpos example

      <Card imgscr="https://imageio.forbes.com/blogs-images/markhughes/files/2018/04/DOLBY-Exclusive-AVENGERS-INFINITY-WAR-poster-1-1200x1753.jpg?format=jpg&width=1200"
        title="Avengers series "
        sname="Avengers infinity war"
        link="https://youtu.be/6ZfuNTqbHE8" */}
      <Card
     imgscr={Sdata[1].imgscr}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}


      />
      {/*Array map methods of array  */}
      <Card
     imgscr={Sdata[1].imgscr}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}


      />
      {Sdata.map(function ncard(val) {
        return (
          <Card
            keys={val.id}
     imgscr={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.link}


      />
        )
      }


     )}



    </>
  )
}

export default PropsEx