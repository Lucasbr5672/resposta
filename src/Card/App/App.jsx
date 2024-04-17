import ContainerCard from "../../Containercard/Container"
import iconeSedan from "../../../images/icon-sedans.svg"
import iconeSuv from "../../../images/icon-suvs.svg"

const App = () => {
    return( 
        <>
        <ContainerCard
        imagem={iconeSedan}
        titulo="SEDANS"
        texto=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus sit eum hic officia reprehenderit eligendi officiis"

        />
        <ContainerCard
        imagem={iconeSuv}
        titulo="SUVS"
        texto=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus sit eum hic officia reprehenderit eligendi officiis"
        />
        </>
    )
}
export default App