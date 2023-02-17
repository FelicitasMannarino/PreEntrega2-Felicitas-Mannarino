import Carousel from 'react-bootstrap/Carousel';

import './Home.css';

const Home = (props) =>{
  
    return (
        <div>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/themes/idea/1-slide-1672773793327-1235398658-9e0e7e957341d0020d1f055ecb890d6b1672773799-1400-1400.webp?1724862685" alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/themes/idea/1-slide-1673278862236-5844694006-2d8016e211df831b95c140b0e32efd461673278866-1400-1400.gif?1724862685" alt="Second slide"/>
            </Carousel.Item>
          </Carousel>
          <div className='home-info'>
            <ul>
              <li><i className='bi bi-house-heart'></i></li>
              <li><h5>Personal</h5></li>
              <li><p>Hace tu casa mas tuya</p></li>
            </ul>
            <ul>
              <li><i className='bi bi-box2-heart'></i></li>
              <li><h5>Detalles</h5></li>
              <li><p>Con nuestro packaging disfruta hasta el desenvoltorio</p></li>
            </ul>
            <ul>
              <li><i className='bi bi-truck'></i></li>
              <li><h5>Envios</h5></li>
              <li><p>Envios confiables y sin cargo.</p></li>
            </ul>
          </div>
        </div>
    );
  }

export default Home