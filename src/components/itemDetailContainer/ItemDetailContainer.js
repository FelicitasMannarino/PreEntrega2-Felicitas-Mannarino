import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



import './ItemDetailContainer.css'

import ItemDetail from '../itemDetail/ItemDetail'


const ItemDetailContainer = () => {

    
    const [producto, setProducto] = useState([])


    const { productoId } = useParams()

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
        }, {
            "id": 10021,
            "name": "BOLAS DE MADERA AROMATICAS",
            "description": "13 Bolas de madera macizas perfumadas con aroma a flores blancas, ideales para perfumar cajones y vestidores.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/9fb860c4-203a-46ee-8709-8a4683a49ae0-740d40c42aa4f5958e16597169240582-1024-1024.webp",
            "price": 2690,
            "category": "Aromas",
            "stock": 26
        }, {
            "id": 10022,
            "name": "JUEGO DE CUBIERTOS AMSTERDAM",
            "description": "Juego de 12 cubiertos gold. Incluye: 4 Cucharas: 19.8cm 4 Cuchillos: 21.4cm 4 Tenedores: 19.5cm",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/bc5ffe84-32fa-4131-8ca6-97cd33abc756-69c9b544e8b433f9e816631040619449-1024-1024.webp",
            "price": 17200,
            "category": "Cocina",
            "stock": 17
        }, {
            "id": 10023,
            "name": "ALFOMBRA BERLIN",
            "description": "Alfombra de baño de latex antideslizante con un largo de 80cm y un ancho de 50cm",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/98d70cb8-9321-483a-b63c-6925d4ee7913-aec54681cfaf75d79916715622506763-1024-1024.webp",
            "price": 8990,
            "category": "Baño y laundry",
            "stock": 25
        }, {
            "id": 10024,
            "name": "LONA MILAN",
            "description": "Largo: 1.90 Metros. Ancho: 1.50 Metros. Material: 75 % algodón 25 % regular. Usá tu lona en la playa, pileta, picnic, outdoors, para deco en tu sillón, de manta o de mantel. Lavar a mano, no usar blanqueador, secar al sol. Plancha fácil.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/5e60124d-8976-4e4d-b0f9-cc97db89e06a-3e5c5a6a7a3f131e4116741595128536-1024-1024.webp",
            "price": 7690,
            "category": "Mantas y almohadones",
            "stock": 12
        }, {
            "id": 10025,
            "name": "VELA NEW YORK",
            "description": "Vela de acrilico color negra. Aroma a madera, caramelo y cafe. Con tapa.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/b6509e4c-bc77-4c37-8ef6-17cd9f4d9679-3865b8b4acba21363e16668774527375-1024-1024.webp",
            "price": 5300,
            "category": "Aromas",
            "stock": 6
        }, {
            "id": 10026,
            "name": "FRASCO DE VIDRIO",
            "description": "Frascos de vidrio hermetico. Incluye 3. Vidrio con tapa de ceramica. 2300ml, 1800ml y 1300ml",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/sets-frascos-hermeticos-a11-01bf08c4b3d3d6bce616355107284015-1024-1024.webp",
            "price": 9600,
            "category": "Cocina",
            "stock": 7
        }, {
            "id": 10027,
            "name": "COMBO BAÑO",
            "description": "Combo que incluye: dispenser de jabon liquido, vaso pporta cepillo de dientes, cepillo limpia inodoro. Material: poliresina.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/combo-71-cdd2840a63994efe8016512383177664-1024-1024.webp",
            "price": 25160,
            "category": "Baño y laundry",
            "stock": 31
        }, {
            "id": 10028,
            "name": "LONA GRECIA",
            "description": "Largo: 1.90 Metros. Ancho: 1.50 Metros. Material: 75 % algodón 25 % regular. Usá tu lona en la playa, pileta, picnic, outdoors, para deco en tu sillón, de manta o de mantel. Lavar a mano, no usar blanqueador, secar al sol. Plancha fácil.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/cbc2ba68-f872-4d08-ac31-7c3d747d36fd-27e4e7ad04df8c5f1816741567498938-1024-1024.webp",
            "price": 8690,
            "category": "Mantas y almohadones",
            "stock": 13
        }, {
            "id": 10029,
            "name": "VELA LATA FRANCE",
            "description": "Vela de soja hecha a mano con pabilo de algodon. Aroma a canela.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/cee60311-d4ab-4be6-a42c-d16c6cc64bfd-15309b2b3c5981ca7c16712168247391-1024-1024.webp",
            "price": 1890,
            "category": "Aromas",
            "stock": 21
        }, {
            "id": 10030,
            "name": "SECAPLATOS",
            "description": "Alto:19.00cm, largo:43.00cm, ancho:31.50cm. Material: Acero noxidable, madera y bandeja de plastico",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/649cf627-234f-416f-ab0e-5026fe3cbcf9-3c9e0475dba5b8e11b16563523665982-1024-1024.webp",
            "price": 15000,
            "category": "Cocina",
            "stock": 8
        }, {
            "id": 10031,
            "name": "ESPEJO OVAL",
            "description": "Espejo ovalado con base negra de plastico." ,
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/331eb00d-8b47-46fb-a6d3-cf2e5b2cad30-93604c8ccafcca71b316547160836049-1024-1024.webp",
            "price": 2690,
            "category": "Baño y laundry",
            "stock": 27
        }, {
            "id": 10032,
            "name": "LONA LISBOA",
            "description": "Largo: 1.90 Metros. Ancho: 1.50 Metros. Material: 75 % algodón 25 % regular. Usá tu lona en la playa, pileta, picnic, outdoors, para deco en tu sillón, de manta o de mantel. Lavar a mano, no usar blanqueador, secar al sol. Plancha fácil.",
            "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/220/products/a3e339f1-e134-49e8-8bf0-ba250663639d-5843938a37b2d941a916741567290745-1024-1024.webp",
            "price": 8690,
            "category": "Mantas y almohadones",
            "stock": 19
        }
    ]

    useEffect(()=>{
        setProducto(<ItemDetail key={json1.find(e => e.id == productoId).id} data={json1.find(e => e.id == productoId)} />)
        return () => {
            setProducto(<ItemDetail key={json1.find(e => e.id == productoId).id} data={json1.find(e => e.id == productoId)} />)
        }
    },[])

    

    return(
        <div>
           {producto}
            
        </div>
    )
}

export default ItemDetailContainer