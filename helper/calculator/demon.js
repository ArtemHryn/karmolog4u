import { getPersonalGraph } from './personal';

const demon12 = {
  topLeft1: 3,
  month: 3,
  topRight1: 6,
  day: 4,
  center: 5,
  year: 9,
  bottomLeft1: 1,
  bottom1: 2,
  bottomRight1: 3,
};

const demon13 = {
  topLeft1: 4,
  month: 4,
  topRight1: 8,
  day: 5,
  center: 7,
  year: 12,
  bottomLeft1: 1,
  bottom1: 3,
  bottomRight1: 4,
};

const demon14 = {
  topLeft1: 5,
  month: 5,
  topRight1: 10,
  day: 6,
  center: 9,
  year: 15,
  bottomLeft1: 1,
  bottom1: 4,
  bottomRight1: 5,
};

const demon15 = {
  topLeft1: 6,
  month: 6,
  topRight1: 12,
  day: 7,
  center: 11,
  year: 18,
  bottomLeft1: 1,
  bottom1: 5,
  bottomRight1: 6,
};

export const getStaticDemonMatrix = number => {
  switch (number) {
    case '12':
      return getPersonalGraph({ info: demon12, isPartners: true, skipCenter: true });
    case '13':
      return getPersonalGraph({ info: demon13, isPartners: true, skipCenter: true });
    case '14':
      return getPersonalGraph({ info: demon14, isPartners: true, skipCenter: true });
    case '15':
      return getPersonalGraph({ info: demon15, isPartners: true, skipCenter: true });
    default:
      break;
  }
};
