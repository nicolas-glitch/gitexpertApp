


export const  handsCat = async(category) =>{
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=ewNTkw3eV7RzFU7lSxkfrVEYdWb0pPOO`
    const res = await fetch(url);
    const {data} = await res.json();

    const gif = data.map( d  => {
        return {
            id: d.id,
            title: d.title,
            url: d.images?.downsized_medium.url
        }
    })

    return gif;

}