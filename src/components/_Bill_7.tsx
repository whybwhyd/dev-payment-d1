import { CardContent, CardTitle } from '@/components/ui/card';
import { couponState } from '@/recoil/couponState';
import { useRecoilValue } from 'recoil';

interface BillPropType {
  deliveryFee: number;
  productPrice: number;
}
export default function Bill(props: BillPropType) {
  const { deliveryFee, productPrice } = props;
  const result = useRecoilValue(couponState);

  const { couponDiscountResult, pointDiscountResult } = result;
  const couponCurrentState = couponDiscountResult === '' ? 0 : couponDiscountResult;
  const pointCurrentState = pointDiscountResult === '' ? 0 : pointDiscountResult;

  const productCalculation = productPrice - Number(couponCurrentState) - Number(pointCurrentState);
  const totalPrice =
    couponCurrentState !== 0 && pointCurrentState !== 0
      ? productCalculation.toString().slice(0, productCalculation.toString().length - 3) +
        productCalculation.toString().slice(3)
      : productPrice;
  return (
    <>
      <CardTitle className="text-[20px]">결제 금액</CardTitle>
      <CardContent className="grid gap-[20px] bg-gray-100  mt-[20px]">
        <div className="flex justify-between border-b-2 mt-[20px] pb-[10px]">
          <p className="text-lg">주문 금액</p>
          <div className="text-lg">
            <p>{productPrice}원</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">쿠폰 할인</p>
          <p>-{couponCurrentState}원</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">포인트 사용</p>
          <p>-{pointCurrentState}원</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">배송비</p>
          <p>+{deliveryFee}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">총 결제금액</p>
          <p className="font-semibold text-blue-500">{totalPrice}원</p>
        </div>
      </CardContent>
      <div className="flex justify-items-start items-center w-[300px] h-[60px] px-[25px] bg-gray-200 gap-[10px] text-lg font-semibold">
        <p className="text-blue-500">700</p>
        <p>포인트 적립예정</p>
      </div>
    </>
  );
}
