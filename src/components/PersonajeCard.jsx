
function PersonajeCard(props) {
  const { pers } = props;

  const parteUrl = pers.url.split("/");
  const id = parteUrl[parteUrl.length - 1];

  const imagenUrl = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

  return (
    <div className="personaje-card">
      <span className="personaje-numero"></span>
      
      <div className="personaje-info">
        <h3>{pers.name}</h3>
        <p>PERSONAJE N.º {id}</p>
      </div>

      <img src={imagenUrl} alt={pers.name} />
      
    </div>
  );
}

export default PersonajeCard;
