import { Children } from "react"
import css from "./style.css"

function ContainerCard({children}){
    return(
        <div className='card-container'>
            {children}
        </div>
    )
}

export default ContainerCard