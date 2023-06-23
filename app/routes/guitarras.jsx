import { Outlet, useLoaderData, useOutletContext} from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import styles from '~/styles/guitarras.css';
import ListadosGuitarras from "../components/listados-guitarras";


export function meta() {
  return [
    {
      property: 'og:title',
      content: 'GuitarLA - Tienda de Guitarras',
    },
  ];
}

export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles
    }
  ]
}



export async function loader(){
  
  const guitarras = await getGuitarras()

  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData()

  return (
    <main className='contenedor'>

      <ListadosGuitarras
        guitarras={guitarras}
      />

      <Outlet
       context={useOutletContext()}
      />

    </main>
  );
}

export default Tienda;
