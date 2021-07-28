import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['naruto']);


    return (
        <div>
                <h2>Hola Mundo</h2>

        <AddCategory setCategories={setCategories}/>

            <hr/>

        

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category}/>
                    })
                }
            </ol>
        </div>
    )
}
