const PeriodMap = ({ period }) => {
  if (!period) return;
  return (
    <div>
      <ul>
        <li>
          <p>Рік</p>
          <p>Енергія</p>
        </li>
        <li>
          <p>Рік</p>
          <p>Енергія</p>
        </li>
        <li>
          <p>Рік</p>
          <p>Енергія</p>
        </li>
      </ul>
      <ul>
        {period.map((el) => (
          <li key={el.age}>
            <p>{el.age}</p>
            <p>{el.arcane}</p>
          </li>
        ))}
        <li>
          <p>80</p>
          <p>{period[0].arcane}</p>
        </li>
      </ul>
    </div>
  );
};

export default PeriodMap;
