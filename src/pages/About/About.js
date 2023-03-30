// CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o MiniBlog</h2>
        <p>
          Este é um projeto de um blog feito com React no front=end e Firebase no 
          backend. 
        </p>

        <Link to='/posts/create' className='btn'>
        Criar post
        </Link>

    </div>
  )
}

export default About