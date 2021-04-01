// rafc es el comando para montar todo el app para exportar

import React,{Fragment, useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{

  
   const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd =() =>{
  //     setCategories([...categories,'HunterXHunter']);
  // }


    return(
        <Fragment>

            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr></hr>
            
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={category}
                            category={category}>

                        </GifGrid>)
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp;