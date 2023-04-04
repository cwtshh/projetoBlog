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

        <div className={styles.new_post}>
          <Link to='/posts/create' className={styles.new_post_btn}>
            Criar post
          </Link>
        </div>

    </div>
  )
}

export default About