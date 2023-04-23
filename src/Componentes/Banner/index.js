import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png"


export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de
          Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :)
        </p>
      </div>

      <div className={styles.imagens}>
        <img alt="círculo colorido"
           className={styles.circuloColorido}
           src={circuloColorido}
           aria-hidden={true}
          />
          <img 
            alt="foto do instrutor Antonio Evaldo sorrindo"
            className={styles.minhaFoto}
            src={minhaFoto}
          />
      </div>
    </div>
  );
}
