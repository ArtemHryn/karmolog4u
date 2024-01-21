const LifeMap = ({ maps }) => {
  if (!maps) return;

  const mapsList = Object.keys(maps.map);
  return (
    <div>
      <div>
        <h3>Карта життя</h3>
        <ul>
          {mapsList.map((mapType) => (
            <li key={mapType}>
              {maps.map[mapType].map((el) => (
                <li key={el.name}>
                  <p>{el.key}</p>
                  <p>{el.name}</p>
                </li>
              ))}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>{maps.extensions_list.title}</h3>
        <ul>
          {maps.extensions_list.extension.map((el) => (
            <li key={el.name}>
              <p>{el.key}</p>
              <p>{el.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LifeMap;
