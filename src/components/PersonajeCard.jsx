function PersonajeCard(props){

    const {poke} = props

    const parteUrl = pers.url.split('/')

    const id = parteUrl[parteUrl.length -1]

    const imagenUrl = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`

    return(
        <div>
            <img src={imagenUrl} alt={pers.name} />
            <h3>{pers.name}</h3>
            <p>Personaje número: {id}</p>
        </div>
    )

}

export default PersonajeCard;