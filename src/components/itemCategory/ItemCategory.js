
import { useEffect, useState } from 'react';
import './ItemCategory.css';
import Item from '../item/Item';



 const ItemCategory = (props) => {

    const [productos, setProducto] = useState([])
  



    const json1 = [
        {
            "id": 10001,
            "name": "SET BAÑO",
            "description": "Incluye dispenser de jabon liquido, vaso porta cepillo de dientes y jabonera. Plastico, color beige.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/f9e9d514-5611-4295-9ba7-f92c6e5ae2c3-66b0498227e44b653416704177533059-640-0.webp",
            "price": 14000,
            "category": "Baño y laundry",
            "stock": 15
        },{
            "id": 10002,
            "name": "VELA SOFIA",
            "description": "Vela de soja con pabilo de algodon. Aroma de manzana y canela.",
            "image":"https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/a5e68f14-7ebb-4d69-8eb5-1b8852c496ff-8d58edbcef9196616c16564494567529-640-0.webp",
            "price": 4490,
            "category": "Aromas",
            "stock": 20
        },{
            "id": 10003,
            "name": "MANTA MAGNOLIA",
            "description": "Manta con flecos color rose",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/a0338620-5d4c-4271-a97b-588c988dd548-9dd1c5fb261f0589f216547203504549-640-0.webp",
            "price": 7640,
            "category": "Mantas y almohadones",
            "stock": 5
        },{
            "id": 10004,
            "name": "JUEGO LONDRES",
            "description": "Juego de 12 piezas para 4 comensales. Contiene playo plato X4, plato postres X4, bowl X4. Material melamina.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/giza_lightx121-5c2d2388ad5885b3ae16710542108036-640-0.webp",
            "price": 27900,
            "category": "Cocina",
            "stock": 10
        },{
            "id": 10005,
            "name": "VELA DREAM",
            "description": "Vela de soja con tapa. Color ambar con aroma a mandarina oriental.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/072/689/products/100579_61-e72c8e5a3a4aa3b54916712009362842-640-0.webp",
            "price": 3390,
            "category": "Aromas",
            "stock": 20
        }, {
            "id": 10006,
            "name": "VELA SAND",
            "description": "Vela de soja con contenedor de vidrio y tapa rosa. Con aroma a sandalo, madera y vainilla",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/072/689/products/ll1111c_11-d35526b41ac637882f16709006833110-640-0.webp",
            "price": 4400,
            "category": "Aromas",
            "stock": 15
        }, {
            "id": 10007,
            "name": "JARRA CONICA",
            "description": "Jarra de vidrio con tapa de acero inoxidable con filtro.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/71d744e3-7668-4b0f-bf54-f8c58a93db89-c3c370695526c5940316704406188829-640-0.webp",
            "price": 10990,
            "category": "Cocina",
            "stock": 6
        }, {
            "id": 10008,
            "name": "ALMOHADON MELINE",
            "description": "Almohadon de pana de 50 x 50 cm",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/072/689/products/coco-19_amb11-13c1e0c0f170290c1216559248051376-640-0.webp",
            "price": 6783,
            "category": "Mantas y almohadones",
            "stock": 6
        }, {
            "id": 10009,
            "name": "BOTELLA DE WHISKY",
            "description": "Botella de vidrio de 1L.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/00e1f5b1-26a8-4cff-b90b-4f8d799fe8b5-6589adc0acf12d9fa616710300338998-640-0.webp",
            "price": 3290,
            "category": "Cocina",
            "stock": 12
        }, {
            "id": 10010,
            "name": "MANTA FRANCHESCA",
            "description": "Manta color camel 100% acrilico frizado.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/262e6f84-734c-49d3-aa03-8126928ec421-f6267102df46a5341f16547203642528-640-0.webp",
            "price": 7640,
            "category": "Mantas y almohadones",
            "stock": 7
        }, {
            "id": 10011,
            "name": "INDIVIDUAL COMBINADO",
            "description": "Individual color suela y blanco. Material tela y yute",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/559491b4-7d51-46c0-a6a0-25d3ab8e94f9-55981f52d730628f7416674159723533-640-0.webp",
            "price": 2690,
            "category": "Cocina",
            "stock": 35
        }, {
            "id": 10012,
            "name": "MANTA JAZMIN",
            "description": "Manta nido de abeja color rosa viejo.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/072/689/products/amb71-72f31b315db1874bd516537413605414-640-0.webp",
            "price": 9300,
            "category": "Mantas y almohadones",
            "stock": 4
        }, {
            "id": 10013,
            "name": "CESTO PARA ROPA",
            "description": "Cesto para ropa sucia de arpilleria y alumino",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/ff15f1ca-552f-4a8d-80c0-5e6e2a5392e2-924e76391b41c0336f16660186187067-640-0.webp",
            "price": 6490,
            "category": "Baño y laundry",
            "stock": 32
        }, {
            "id": 10014,
            "name": "ESPEJO MADERA",
            "description": "Espejo rectangular para colgar o apoyar con base de madera.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/c3704653-4005-4949-8a38-fdcb79e103b8-dfda880bcf3711ff7316630126788231-640-0.webp",
            "price": 3290,
            "category": "Baño y laundry",
            "stock": 20
        }, {
            "id": 10015,
            "name": "VELA RUFINA",
            "description": "Vela de soja con pabilo de algodon color gris. Aroma a coco y vainilla",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/cc58812e-1b73-48e7-928d-586608f976ef-dc362c85c5d039c59a16734658531708-640-0.webp",
            "price": 3690,
            "category": "Aromas",
            "stock": 3
        }, {
            "id": 10016,
            "name": "ORGANIZADOR DE BAÑO",
            "description": "Incluye dos vasos. Seis divisores. Color blanco y gris.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/50ec415e-b96d-4780-bada-3fe552eb2d45-aa88d8b7f579f37ebc16607445410060-640-0.webp",
            "price": 5990,
            "category": "Baño y laundry",
            "stock": 22
        }, {
            "id": 10017,
            "name": "ALMOHADON CIELO",
            "description": "Almohadon de tusor gris rayado",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/d349895e-4e6c-49a2-be22-a4a755ba4645-80d4598db1bf11259316661230796568-640-0.webp",
            "price": 5290,
            "category": "Mantas y almohadones",
            "stock": 23
        }, {
            "id": 10018,
            "name": "DISPENSER DE JABON LIQUIDO",
            "description": "Color beige con material poliresina.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/c830c6c1-5bc5-4fe3-9822-9b08ef9eb578-b18b12f81638eb001816663702955181-640-0.webp",
            "price": 4290,
            "category": "Baño y laundry",
            "stock": 7
        }, {
            "id": 10019,
            "name": "SET 6 INDIVIDUALES",
            "description": "Individuales de yute X6.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/2aab982d-458c-4db4-a1b2-886a894e18f5-b5fb2b59bd2494e86516717440999302-640-0.webp",
            "price": 13450,
            "category": "Cocina",
            "stock": 8
        }, {
            "id": 10020,
            "name": "HOME SPRAY",
            "description": "Aromatizante para sabanas, prendas de ropa o toallas. Coco y Vainilla. Flores blancas. Pitanga. Baby boom. Naranja y pimienta",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/825a5c61-5a66-4b03-8af8-ac706d6d7157-3346fa05acfde3546716680052992324-640-0.webp",
            "price": 1690,
            "category": "Aromas",
            "stock": 7
        }
    ]

    useEffect(()=>{
        setProducto(<Item key={json1.filter(e => e.props.categoria == props.categoria)} />)
        return () => {
            setProducto(<Item key={json1.filter(e => e.props.categoria == props.categoria)} />)
        }
    },[])

     return(
        <div>
            <p>categories</p>
         {productos}

        </div> 
       

     )
 }

 export default ItemCategory