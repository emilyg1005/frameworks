import styles from '../styles/Home.module.css'
import Header from './compo/header'
import Footer from './compo/footer'
import Link from 'next/link'

export default function objetos({ objetos }) {
    return (
        <div>
            <Header></Header>
            <div id={styles.objetos}>
                <h1>Lista de objetos</h1>
                {objetos.map((obj, index) => (
                    <Link href='/profile/[id]' as={`/profile/${index}`}>
                        <p>{obj.nome}</p>
                    </Link>
                ))}
            </div>
            <Footer></Footer>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const objetos = repo;
    return {
        props: { objetos }
    }
}) 