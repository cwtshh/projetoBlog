// CSS
import styles from "./Home.module.css";

//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";


//components
import PostDetail from "../../components/PostDetail";

const Home = () => {

  const [querry, setQuerry] = useState('');
  const {documents: posts, loading} = useFetchDocuments("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.home}>
        <h1>Posts mais recentes</h1>

        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input 
            type='text' 
            placeholder="Procure por Posts ou tags" 
            onChange={(e) => setQuerry(e.target.value)}
            style={{width:500}}
          
          />
          <button className={styles.btn_search}>Pesquisar</button>
        </form>

        <div className={styles.noposts}>

          {!loading && <p>Carregando posts...</p>}
          {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}

          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foi possivel encontrar posts</p>
              <Link to='/posts/create' className="btn">Criar primeiro post</Link>
            </div>
          )}
        </div>

         
    </div>
  )
}

export default Home;