import { useEffect, useState } from "react"
import {handsCat} from '../helpers/handsCat'

export const useFetchGif = (categorie) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })
    
    useEffect(() => {
        handsCat(categorie).then(
            imgs =>{
                setstate({
                    data: imgs,
                    loading: false
                });
            })    
    },[categorie])


    return state;
}
