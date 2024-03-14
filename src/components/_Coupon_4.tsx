import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { couponState } from '@/recoil/couponState';
import { CouponNumberList } from '@/data/_CouponNumberList';

interface CouponPropsType {
  point: number;
  productPrice: number;
}
export default function Coupon(props: CouponPropsType) {
  const { point, productPrice } = props;
  const initialValue = { coupon: '', couponNumber: '', pointMinus: '' };
  const [discountValue, setDiscountValue] = useState(initialValue);
  const [result, setResult] = useRecoilState(couponState);
  const { coupon, couponNumber, pointMinus } = discountValue;
  const availablePoints = Number(point) - Number(result.pointDiscountResult);

  const onChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setDiscountValue((item) => ({ ...item, [name]: value }));
  };

  const couponPercenthandler = () => {
    // 0은 select로 변경 후
    if (coupon === '' || coupon === '0') {
      alert('쿠폰을 입력해주세요');
    } else {
      const percentage = Number(coupon.slice(0, 2)) * 0.01;
      const fraction = productPrice * percentage;
      // select로 바꿀 예정
      setResult((item) => ({ ...item, couponDiscountResult: fraction.toString() }));
      // 후에 토스트 컴포넌트 변형해서 위로 위치시켜 alert 대신으로 바꿀 예정
      alert(`${coupon}이 적용되었습니다.`);
      // input 비우기
      setDiscountValue((i) => ({ ...i, coupon: '' }));
    }
  };
  const couponNumberhandler = () => {
    if (couponNumber === '') {
      alert('쿠폰 번호을 입력해주세요');
    } else {
      const validCoupon = CouponNumberList.couponLists.find((item) =>
        item.code.includes(couponNumber),
      )?.discountPercent;
      const percentage = validCoupon ? validCoupon * 0.01 : 0;
      // const productionParse = Number(productPrice.replace(/,/g, ''));
      const fraction = productPrice * percentage;

      if (validCoupon) {
        setResult((i) => ({ ...i, couponDiscountResult: fraction.toString() }));
        alert(`${validCoupon.toString()}% 할인 쿠폰이 적용되었습니다.`);
      } else {
        alert('쿠폰을 다시 입력해주세요');
      }
      // input 비우기
      setDiscountValue((i) => ({ ...i, couponNumber: '' }));
    }
  };

  const pointhandeler = () => {
    const productPriceParse = Number(productPrice);
    const pointParse = Number(point);
    const pointMinusParse = Number(pointMinus);
    if (productPriceParse < 10000 || pointParse < 5000) {
      alert('5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용가능합니다.');
      return;
    } else {
      if (pointMinus === '') {
        alert('포인트를 입력해주세요');
        return;
      }
      if (pointParse - pointMinusParse < 0) {
        alert('보유포인트보다 입력 포인트가 큽니다.');
        return;
      } else {
        setResult((item) => ({ ...item, pointDiscountResult: pointMinus }));
        alert(`${pointMinus}포인트가 사용되었습니다.`);
      }
      // input 비우기
      setDiscountValue((i) => ({ ...i, pointMinus: '' }));
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      switch (true) {
        case !!coupon:
          couponPercenthandler();
          break;
        case !!couponNumber:
          couponNumberhandler();
          break;
        case !!pointMinus:
          pointhandeler();
          break;
        default:
          break;
      }
    }
  };
  return (
    <Accordion type="single" defaultValue="item-4" collapsible>
      <Card className="border-none  w-[700px]">
        <AccordionItem value="item-4">
          <AccordionTrigger className="mr-[20px]">
            <CardTitle className="text-[20px] pb-[10px]">쿠폰/포인트</CardTitle>
          </AccordionTrigger>
          <AccordionContent>
            <CardContent className="flex gap-[40px] border-black border-t-2 px-[5px] py-[40px]">
              <p>쿠폰/포인트</p>
              <div className="grid gap-[20px]">
                <div>
                  <p className="mb-[10px]">쿠폰</p>
                  <div className="flex gap-[8px] w-[480px]">
                    <Input
                      id="coupon"
                      name="coupon"
                      className=" bg-gray-100"
                      placeholder="nn% 할인"
                      value={coupon}
                      onChange={onChange}
                      onKeyPress={handleKeyPress}
                    />
                    <Button type="button" onClick={couponPercenthandler} variant="outline">
                      쿠폰적용
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="mb-[10px]">쿠폰 번호</p>
                  <div className="flex gap-[8px] w-[480px]">
                    <Input
                      id="couponNumber"
                      name="couponNumber"
                      className=" bg-gray-100"
                      placeholder="n천원 할인"
                      value={couponNumber}
                      onChange={onChange}
                      onKeyPress={handleKeyPress}
                    />
                    <Button type="button" onClick={couponNumberhandler} variant="outline">
                      번호확인
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="mb-[10px]">포인트</p>
                  <div className="flex gap-[8px] w-[480px]">
                    <Input
                      id="pointMinus"
                      name="pointMinus"
                      className="bg-gray-100"
                      placeholder="n천원 할인"
                      value={pointMinus}
                      onChange={onChange}
                      onKeyPress={handleKeyPress}
                    />
                    <Button type="button" onClick={pointhandeler} variant="outline">
                      전액사용
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="flex gap-[10px] w-[480px]">
                    <p>보유 포인트</p>
                    <p className="font-semibold">{availablePoints}</p>
                  </div>
                  <p>5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용가능</p>
                </div>
              </div>
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Card>
    </Accordion>
  );
}
