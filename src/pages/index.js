import styles from '../styles/Home.module.css'
import Header from './compo/header'
import Footer from './compo/footer'

export default function index() {
  return (
    <div>
      <Header></Header>
      <div id={styles.main}>
        <h2>BocaWeb</h2>
        <p>O BocaWeb é um portal onde pessoas com deficiência visual terão acesso a informações contidas em imagens por meio de audiodescrição.

          Estamos formando um grande grupo de colaboradores voluntários para criar objetos em audiodescrição.

          Ficou interessado? Faça seu cadastro, navegue pelo portal e depois entre contato conosco caso queira ser um colaborador.</p><br></br>
          <a href='/objetos'>Ou venha conhecer os objetos</a>

      </div>
      <Footer></Footer>
    </div>
  )
}