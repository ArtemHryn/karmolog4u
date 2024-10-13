import { checkNum } from './personal';

const createChannel = (info, center, bottom, bottomRight) => ({
  topLeft1: info.num1,
  month: info.num2,
  topRight1: checkNum(info.num1, info.num2),
  day: info.num1,
  center,
  year: checkNum(info.num1, center),
  bottomLeft1: checkNum(center),
  bottom1: checkNum(bottom),
  bottomRight1: checkNum(bottom, bottomRight),
});

const getKeys = (matrix, currentKey) => {
  switch (currentKey) {
    case 'day':
      return {
        num1: matrix.day,
        num2: matrix.left2,
        num3: matrix.month,
        num4: matrix.top2,
        num5: matrix.bottom1,
        num6: matrix.bottom2,
        num7: matrix.year,
        num8: matrix.right2,
      };
    case 'left3':
      return {
        num1: matrix.left3,
        num2: matrix.left2,
        num3: matrix.top3,
        num4: matrix.top2,
        num5: matrix.bottom3,
        num6: matrix.bottom2,
        num7: matrix.right3,
        num8: matrix.right2,
      };
    case 'month':
      return {
        num1: matrix.month,
        num2: matrix.top2,
        num3: matrix.day,
        num4: matrix.left2,
        num5: matrix.year,
        num6: matrix.right2,
        num7: matrix.bottom1,
        num8: matrix.bottom2,
      };
    case 'top3':
      return {
        num1: matrix.top3,
        num2: matrix.top2,
        num3: matrix.left3,
        num4: matrix.left2,
        num5: matrix.right3,
        num6: matrix.right2,
        num7: matrix.bottom3,
        num8: matrix.bottom2,
      };
    case 'year':
      return {
        num1: matrix.year,
        num2: matrix.right2,
        num3: matrix.month,
        num4: matrix.top2,
        num5: matrix.bottom1,
        num6: matrix.bottom2,
        num7: matrix.day,
        num8: matrix.left2,
      };
    case 'right3':
      return {
        num1: matrix.right3,
        num2: matrix.right2,
        num3: matrix.top3,
        num4: matrix.top2,
        num5: matrix.bottom3,
        num6: matrix.bottom2,
        num7: matrix.left3,
        num8: matrix.left2,
      };
    case 'bottom1':
      return {
        num1: matrix.bottom1,
        num2: matrix.bottom2,
        num3: matrix.day,
        num4: matrix.left2,
        num5: matrix.year,
        num6: matrix.right2,
        num7: matrix.month,
        num8: matrix.top2,
      };
    case 'bottom3':
      return {
        num1: matrix.bottom3,
        num2: matrix.bottom2,
        num3: matrix.left3,
        num4: matrix.left2,
        num5: matrix.right3,
        num6: matrix.right2,
        num7: matrix.top3,
        num8: matrix.top2,
      };
    default:
      return 'test';
  }
};

export const regression = (matrix, currentKey) => {
  const info = getKeys(matrix, currentKey);

  return {
    channel1: createChannel(info, info.num3, info.num4, info.num3),
    channel2: createChannel(info, info.num5, info.num6, info.num5),
    channel3: createChannel(info, info.num7, info.num8, info.num7),
  };
};
