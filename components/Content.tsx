import Cards from "./Cards"
import Greet from "./Greet"

const Content = ()=>{
    return (
        <div className="w-full">
            <div className=" mx-auto max-w-screen-xl">
                <Greet userName="Neelesh"/>
                <Cards/>
            </div>
        </div>
    )
}

export default Content