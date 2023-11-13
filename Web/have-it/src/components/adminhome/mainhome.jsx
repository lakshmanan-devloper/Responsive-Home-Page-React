import { TopNav } from "./mainhome/topnav"
import { Charts } from "./mainhome/charts"

export function MainHome() {

    return (
        <div className="main-container">
            <TopNav/>
            <Charts/>
        </div>
    )
}