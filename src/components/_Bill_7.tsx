import { CardContent, CardTitle } from '@/components/ui/card';

interface BillPropType {
  deliveryFee: string;
}
export default function Bill(props: BillPropType) {
  const { deliveryFee } = props;
  return (
    <>
      <CardTitle className="text-[20px]">결제 금액</CardTitle>
      <CardContent className="grid gap-[20px] bg-gray-100  mt-[20px]">
        <div className="flex justify-between border-b-2 mt-[20px] pb-[10px]">
          <p className="text-lg font-semibold">주문 금액</p>
          <div className="text-lg font-semibold">
            <p>18,000원</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">쿠폰 할인</p>
          <p>-1000원</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">포인트 사용</p>
          <p>-0원</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">배송비</p>
          <p>+{deliveryFee}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">총 결제금액</p>
          <p>19,500원</p>
        </div>
      </CardContent>
      <div className="flex justify-items-start items-center w-[300px] h-[60px] px-[25px] bg-gray-200 gap-[10px] text-lg font-semibold">
        <p>700</p>
        <p>포인트 적립예정</p>
      </div>
    </>
  );
}
