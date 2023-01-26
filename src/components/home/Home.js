import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import ItemListContainer from '../itemListContainer/ItemListContainer';


const Home = () =>{



    return (
        <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/themes/idea/1-slide-1672773793327-1235398658-9e0e7e957341d0020d1f055ecb890d6b1672773799-1400-1400.webp?1724862685"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/themes/idea/1-slide-1673278862236-5844694006-2d8016e211df831b95c140b0e32efd461673278866-1400-1400.gif?1724862685"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <h3  className='more'>Nuestros productos</h3>
        <ItemListContainer/>
      </div>


    );
  }

export default Home