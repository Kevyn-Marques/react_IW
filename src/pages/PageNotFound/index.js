import styles from "./pagenotfound.module.css"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import NotFound from "./not_Found.png"

function PageNotFound(){
    return(
        <>
            <Header/>
                <section className={styles.container}>
                    <h1>Ops! Conteúdo não localizado.</h1>
                    <img src={NotFound} width="390" alt="logo de página não localizada"/>
                </section>
            <Footer/>
        </>
    );
}

export default PageNotFound;