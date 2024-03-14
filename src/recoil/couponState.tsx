import { atom } from 'recoil';

export const couponState = atom({
  key: 'couponState',
  default: {
    couponDiscountResult: '',
    pointDiscountResult: '',
  },
});
