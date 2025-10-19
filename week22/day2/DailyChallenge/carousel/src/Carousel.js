import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'; // ✅ React 18
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import hk from "./hk.jpg"; 
import pl from "./pl.png";
import mc from "./mc.png";
import ny from "./ny.png"; 

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={hk} alt="hk" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src={pl} alt="Macao"  />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src={mc} alt="Japan" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src={ny} alt="Las Vegas" />
                    <p className="legend">JaLas Vegas</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;