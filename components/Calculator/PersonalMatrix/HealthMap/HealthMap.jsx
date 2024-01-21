const HealthMap = ({ health }) => {
  if (!health) return;
  console.log(health);
  return (
    <div>
      <h3>{health.title}</h3>
      <ul>
        {health.columnName.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <ul>
        {health.chakraList.map((el) => (
          <li key={el.chakraName}>
            <p>{el.chakraName}</p>
            <p>{el.physics}</p>
            <p>{el.energy}</p>
            <p>{el.emotion}</p>
            {/* <p>{el.tip }</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthMap;
