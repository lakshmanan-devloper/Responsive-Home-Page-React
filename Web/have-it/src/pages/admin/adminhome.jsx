import { MainHome } from "../../components/adminhome/mainhome"
import { MainHomeSideBar } from "../../components/adminhome/sidebar"
import './styles.css';

export function AdminHome() {
   
    return(
        <> <MainHomeSideBar/> 
            <MainHome></MainHome>    
        </>
    )
}