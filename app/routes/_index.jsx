import { useLoaderData } from '@remix-run/react';
import {getGuitarras} from '~/models/guitarras.server';
import {getPosts} from '~/models/posts.server';
import {getCurso} from '~/models/curso.server';
import ListadosGuitarras from '../components/listados-guitarras';
import ListadosPosts from '../components/listados-posts';
import stylesGuitarras from '../styles/guitarras.css';
import stylesPosts from '../styles/blog.css';
import stylesCurso from '../styles/curso.css';
import Curso from '../components/curso';


export function meta(){

}


export function links(){
  return[
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}


export async function loader(){

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}


function Index() {

  const {guitarras, posts, curso} = useLoaderData();

  return (
    <>
      <main className='contenedor'>
      
      <ListadosGuitarras
        guitarras={guitarras}
      />            
      </main>

      <Curso
        curso={curso.attributes}
      />

      <section className='contenedor'>
        <ListadosPosts 
          posts={posts}
        />
      </section>

    </>
  )
}

export default Index
