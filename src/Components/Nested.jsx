import { Link, Outlet } from "react-router-dom"
function Usee(){

    return(
        <div>
            <h1>Nested Page</h1>
            <Link to="nested1">Nested1</Link>
            <Link to="nested2">Nested2</Link> 
            <Outlet/>
        </div>
    )
}

export default Usee;