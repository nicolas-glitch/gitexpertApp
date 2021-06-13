import React, {useState} from 'react';
import AddCategories from './components/AddCategories';
import GifGrid from './components/GifGrid';



const GifExpertApp = () => {
        
        const [category, setCategory] = useState(['One punch']);



        // const categoryAdd = () =>{ 
        //     setCategory(cat => ['naruto',...cat]);
            
        // };
            
        return(
            <>
            <h2>GifExpertApp</h2>
            <hr />
            < AddCategories  setCategories = {setCategory}/>
            <ol>
                {
                    category.map(c => <GifGrid key={c} categorie = {c} />)
                }

            </ol>
            </>
        );
}


export default GifExpertApp;