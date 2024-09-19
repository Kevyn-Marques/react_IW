import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return(
        <>
        <header className={styles.header}>
            <Link to="/">
                <span>EtecFlix</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Pesquisar</Link>
                <Link to="/watch">Assistir</Link>
            </nav>
        </header>
        </>
    );
}
export default Header;