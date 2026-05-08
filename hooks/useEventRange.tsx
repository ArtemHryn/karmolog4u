import { Nullable } from 'primereact/ts-helpers';
import { useMemo } from 'react';

type Range = {
  from?: Date;
  to?: Date;
};

const useEventRange = (checked: string, dates: Nullable<Date[]>): Range => {
  return useMemo(() => {
    const now = new Date();
    switch (checked) {
      case 'today': {
        const from = new Date();
        const to = new Date();
        to.setHours(24, 0, 0, 0);
        return { from, to };
      }
      case 'week': {
        const from = new Date();
        const to = new Date();
        const diff = 7 - to.getDay();
        to.setDate(now.getDate() + diff);
        to.setHours(23, 59, 59, 999);
        return { from, to };
      }
      case 'month': {
        const from = new Date();
        const to = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        to.setHours(23, 59, 59, 999);
        return { from, to };
      }
      case 'custom': {
        if (!dates || dates.length < 2) return {};
        const [from, to] = dates;
        if (!from || !to) return {};
        return { from, to };
      }
      default:
        return {};
    }
  }, [dates, checked]);
};

export default useEventRange;
