import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () =>{

    

    const [categories, setCategories] = useState(["Naruto"]);

    /* const handleAdd = () => {

        let anime= "Re:Zero";
        setCategories(categories.concat(anime));
        console.log(categories);

        setCategories([...categories,anime]);

        setCategories((e) => [...e, anime]); //la e es el estado anterior del estado
    } */
return(

    <>

    
    <h2>soy un componente funcionando</h2>
    
    <AddCategory setCategories={setCategories}/>
    <hr />
    
            <ol>
                    {
                    categories.map( category => (
                       <GifGrid 
                       key={category}
                       category={category}/>
                    ))
                    }
            </ol>

    </>

)



}

export default GifExpertApp ;