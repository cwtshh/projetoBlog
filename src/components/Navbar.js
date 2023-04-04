import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();



  return (
    <nav className={styles.navbar}>

        {user ? (
            <p style={{textAlign: 'left'}} >
            Bem vindo ao <NavLink to='/' className={styles.brand}> cwtsh <span>Blog, </span></NavLink> 
            
            {user.email}!
 
            </p>
        ) : (
            <NavLink to='/' className={styles.brand}> cwtsh <span>Blog </span></NavLink>
        )}


{/* 
        <NavLink to='/' className={styles.brand}>
            Mini <span>Blog</span>
        </NavLink>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <p style={{textAlign: 'left'}} >Bem vindo, {user.email}!</p>
        </div>
 */}
        

        <ul className={styles.links_list}>
            <li>
                <NavLink to='/' className={({isActive}) => (isActive ? styles.active : '') } >
                    Home
                </NavLink>
            </li>

            {!user && (
                <>
                    <li>
                        <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : '') } >
                            Logar
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/register' className={({isActive}) => (isActive ? styles.active : '') } >
                            Cadastrar
                        </NavLink>
                    </li>
                </> 
            )}

            {user && (
                <>
                    <li>
                        <NavLink to='/posts/create' className={({isActive}) => (isActive ? styles.active : '') } >
                            Novo Post
                        </NavLink>
                    </li>

                    {/* <li>
                        <NavLink to='/dashboard' className={({isActive}) => (isActive ? styles.active : '') } >
                            DashBoard
                        </NavLink>
                    </li> */}
                </> 
            )}

            
           
            <li>
                <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : '') } >
                    Sobre
                </NavLink>
            </li>

            {user && (
                <li>
                    <button onClick={logout} className={styles.isActive}>Sair</button>
                </li>
            )}

        </ul>
    </nav>
  )
}

export default Navbar