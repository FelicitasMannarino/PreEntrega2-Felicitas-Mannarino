import './AboutUs.css';

const AboutUs = (props) =>{
    return(
        <div className='us'>
            <h1>Quienes somos</h1>
            <p>Somos un emprendimiento familiar que comenzo con el fin de hacer nuestra casa un poco mas nuestra y convertirla en un verdadero hograr. </p>
            <p>Que nos represente y nos haga sentir comodos y contentos. Todo esto a traves del esfuerzo, el entusiasmo y la actitud de logro.</p>
            <p>Trabajamos para ofrecerles productos de buena calidad, modernos y accesibles. Trabajamos con mucho esfuerzo para lograr todos nuestros objetivos pero al fin nos sentimos llenos con el resultado final y el seguimiento de las personas con una actitud positiva y poderosa como nosotros.</p> 
            <div className='situation'><p>{props.situation}</p></div>
        </div>
    )
}

export default AboutUs