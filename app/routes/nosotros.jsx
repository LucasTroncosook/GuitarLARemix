
import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta({ matches }) {
  let rootMeta = matches[0].meta;
  let title = rootMeta.find((m) => m.title);
 
  return [
    title,
    { name: "description", content: "GuitarLA - Sobre Nosotros" },
    { property: "og:title", content: "GuitarLA - Sobre Nosotros" },
 
    // you can now add SEO related <links>
    { tagName: "link", rel: "canonical", href: "..." },
 
    // and <script type=ld+json>
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Remix",
      },
    },
  ];
}

export function links(){
  return[{
    rel:'stylesheet',
    href: styles
  },
  {
    rel:'preload',
    href: imagen,
    as:'image'
  }]
}



function Nosotros() {

  return (
    <main className="contenedor nosotros">
      
      <h2 className="heading">Nosotros</h2>
    
      <div className="contenido">

        <img src={imagen} alt='imagen sobre nosotros'/>

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia scelerisque risus, quis condimentum nisl malesuada sit amet. Donec neque elit, blandit a aliquam id, interdum a arcu. Mauris vel tristique diam. Vestibulum porta, ex vel bibendum lobortis, nunc lacus ullamcorper dui, eu pharetra quam metus in erat.</p>

          <p>Sed ut vulputate urna, in aliquam ligula. Nulla ac elit at turpis scelerisque maximus ac vitae eros. In porttitor id velit et euismod. Fusce a molestie lorem. Aliquam consequat, neque eu faucibus consectetur, ligula nunc hendrerit purus, vel efficitur odio odio vitae nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie lacus vitae felis tempor dignissim. Maecenas at tellus enim. Fusce in aliquam neque. Quisque fringilla est nec purus convallis posuere. Etiam ac ligula a orci vestibulum molestie at ut augue.</p>
        </div>

      </div>

    </main>
  )
}

export default Nosotros
