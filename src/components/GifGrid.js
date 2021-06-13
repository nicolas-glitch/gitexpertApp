import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import GifGridItem from './GifGridItem';

 const GifGrid = ({categorie}) => {

    const {data:img, loading} = useFetchGif(categorie);





    return (
        <>
          <h4>{categorie}</h4>

          {loading && <p className="animate__animated animate__animated">Loading...</p>}
        <div className="card-grid animate__animated animate__fadeIn">
            
            
                {
                    img.map( i => < GifGridItem 
                        key= {i.id}
                        {...i}
                     />)
                }

        </div>
        </>
  
    )
}

export default GifGrid