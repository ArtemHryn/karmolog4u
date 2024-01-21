import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import PersonalMatrix from "./PersonalMatrix";
import {
  getHealthMap,
  getLifeMap,
  getPeriod,
  getPersonalGraph,
} from "@helper/calculator/personal";
import PeriodMap from "./PeriodMap/PeriodMap";
import LifeMap from "./LifeMap/LifeMap";
import HealthMap from "./HealthMap/HealthMap";

function PersonalCalculator({ date, name }) {
  const [matrix, setMatrix] = useState(null);
  const [lifeMap, setLifeMap] = useState(null);
  const [period, setPeriod] = useState(null);
  const [health, setHealth] = useState(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (!date) return;
    // console.log(searchParams.get('name'));
    // console.log(searchParams.get('date'));
    const [day, month, year] = date.split("-");
    const result = getPersonalGraph({
      info: { day, month, year },
      lifeMap: true,
    });
    setMatrix(result);
    setPeriod(getPeriod({ info: result }));
    setLifeMap(getLifeMap({ info: result }));
    setHealth(getHealthMap({ info: result }));
  }, [date, searchParams]);

  if (!date) return;

  return (
    <>
      <PersonalMatrix matrix={matrix} />
      <LifeMap maps={lifeMap} />
      <HealthMap health={health} />
      <PeriodMap period={period} />
    </>
  );
}

export default PersonalCalculator;
