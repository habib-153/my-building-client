import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ban1 from '../../../assets/assets/home/Banner1.webp'
import ban2 from '../../../assets/assets/home/Banner2.webp'
import ban3 from '../../../assets/assets/home/Banner3.jpg'
import ban4 from '../../../assets/assets/home/Banner4.jpg'
import ban5 from '../../../assets/assets/home/Banner5.jpg'
import ban6 from '../../../assets/assets/home/Banner6.jpg'
const Banner = () => {
    return (
        <Carousel autoPlay className="text-center">
                <div>
                    <img src={ban1} />
                </div>
                <div>
                    <img src={ban2} />
                </div>
                <div>
                    <img src={ban3} />
                </div>
                <div>
                    <img src={ban4} />
                </div>
                <div>
                    <img src={ban5} />
                </div>
                <div>
                    <img src={ban6} />
                </div>
            </Carousel>
    );
};

export default Banner;