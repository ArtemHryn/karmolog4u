import {
  SSK_INDEPENDENT,
  SSK_WITH_CURATOR,
  SSK_WITH_SERGIY,
  ADVANCED,
  CONSULTING,
} from '../consts';

export const coursesTypeList = [
  { name: 'ССК самост.', value: SSK_INDEPENDENT },
  { name: 'ССК з курат.', value: SSK_WITH_CURATOR },
  { name: 'ССК Із Сергієм', value: SSK_WITH_SERGIY },
  { name: 'Поглиблений', value: ADVANCED },
  { name: 'Консульт.', value: CONSULTING },
];

export const completenessList = [
  { name: 'Весь курс', value: 'ALL' },
  { name: 'По урокам', value: 'BY_LESSON' },
];

export const accessTypeList = [
  { name: 'Безстроково', value: 'PERMANENT' },
  { name: 'На період', value: 'FOR_PERIOD' },
  { name: 'До дати', value: 'TO_DATE' },
];

export const typesList = [
  { type: SSK_INDEPENDENT, name: 'ССК самостійний' },
  { type: SSK_WITH_CURATOR, name: 'ССК з куратором' },
  { type: SSK_WITH_SERGIY, name: 'ССК із Сергієм' },
  { type: ADVANCED, name: 'Поглиблений' },
  { type: CONSULTING, name: 'Консультанський' },
];