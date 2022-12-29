import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
import "bootstrap/dist/css/bootstrap.css";
import HorizontalBar from "./HorizontalBar";
import { useState } from "react";

function CarouselFadeExample(props) {
  const address = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
  ];
  const carousel = {
    // height: "100vh",
    width: "100vw",
    margin: "auto",
  };
  const box = {
    height: "100px",
  };
  const container = {
    // width: "100vw",
    height:"100vh", 
    margin: "auto",
    position: "sticky",
    top: "0",
  };
  const image = {
    margin: "auto",
    // width: "80vw",
    // height: "80vh",
  };
  const [outer, setOuter] = useState({
    height: "200vh",
  });
  const [extra, setExtra] = useState({ visibility:"hidden" });
  const [clicked, setClicked] = useState(false);
  const [fade,setFade]=useState(false)
  const [makeCenter,setMakeCenter]=useState({

  })
  const triggerFade = () => {
    setFade(prevState => {
      return !prevState
    })
  }
  const handleClick = (event) => {
    console.log(event.target)
    setExtra({
      // visibility:"visible",
      transform: "translateY(-10%,-50%)",
      // transition: "transform 10s alternate",
    });
    setMakeCenter({display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"})
    setClicked(true);

  };
  function handleEnd(event){
    console.log(event.target);
    event.target.style.display="none"; 
  }
  return (
    <>
      <div style={makeCenter} >
        <div  className={clicked?'notpresent':'present'} onAnimationEnd={handleEnd}>
          <Carousel fade>
            {address.map((item, index) => (
              <Carousel.Item key={index}>
                <div className="handleImage">
                  <img
                    className={`d-block w-100`}
                    src={item}
                    alt={{ index } + " slide"}
                    // style={{height:"calc(100vh - 129px)"}}
                  />
                  <Carousel.Caption>
                    <h3>{index} slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    {/* <div onClick={handleClick}>
                      <HorizontalBar />
                    </div> */}
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      <div style={extra} onClick={triggerFade} className={fade?'fades':'unfades'} >
        <HorizontalBar clicked={clicked} />
      </div>
      </div>
    </>
  );
}

export default CarouselFadeExample;