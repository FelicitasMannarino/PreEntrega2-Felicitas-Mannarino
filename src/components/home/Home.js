
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import ItemListContainer from '../itemListContainer/ItemListContainer';




const Home = (props) =>{
  

  const firebaseConfig = {
    apiKey: "AIzaSyC3P3o7jufjiQ7T2KwfHfUSQ_E5vtI1ug8",
    authDomain: "react-app-d0eb2.firebaseapp.com",
    projectId: "react-app-d0eb2",
    storageBucket: "react-app-d0eb2.appspot.com",
    messagingSenderId: "741548259416",
    appId: "1:741548259416:web:4513f7d369ec2000b9722d"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  async function getCities(db) {
    const citiesCol = collection(db, 'listaProductos');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

  getCities()


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
      <h3  className='home-products'>Nuestros productos</h3>
        <ItemListContainer/>
        <div className='situation'><p>{props.situation}</p></div>
      </div>


    );
  }

export default Home