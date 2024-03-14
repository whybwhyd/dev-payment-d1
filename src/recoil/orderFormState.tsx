import { atom } from 'recoil';

export const orderFormState = atom({
  key: 'orderFormState',
  default: [] as (string | number | string[])[],
});
