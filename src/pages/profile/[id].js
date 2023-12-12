import styles from '../../styles/Home.module.css'
import Header from '../compo/header'
import Footer from '../compo/footer'

export default function profile({ objeto = {} }) {
    return (
        <>
            <Header></Header>
            <div id={styles.objeto}>
                <h2>{objeto.nome}</h2>
                <p>{objeto.descricao}</p>
            </div>
            <Footer></Footer>
        </>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const objeto = repo[context.params.id];
    return {
        props: { objeto }
    }
})

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const objetos = await repo;
    const paths = objetos.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };

}


