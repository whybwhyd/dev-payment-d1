import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { productSchema } from '@/validators/product';
import { z } from 'zod';
import Product from '@/components/_Product_1';
import Customer from '@/components/_Customer_2';
import Postservice from '@/components/_Postservice_3';
import Coupon from '@/components/_Coupon_4';
import Payment from '@/components/_Payment_5';
import type { Control } from 'react-hook-form';
import Agreement from '@/components/_Agreement_6';
import Bill from '@/components/_Bill_7';
import { MockUpData } from '@/data/_MockUpData';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useRecoilState } from 'recoil';
import { orderFormState } from '@/recoil/orderFormState';

export type ProductInput = z.infer<typeof productSchema>;

export interface propsType {
  formControlProp: Control<ProductInput>;
}

export default function Home() {
  const {
    productName,
    productNumber,
    productPrice,
    customer,
    phoneNumber,
    email,
    address,
    point,
    coupon,
    deliveryFee,
  } = MockUpData.data[0];
  const totalDivRef = useRef<HTMLDivElement | null>(null);
  const [IsTotalRef, setIsTotalRef] = useState(false);
  const [order, setOrder] = useRecoilState(orderFormState);

  // totalDivRef가 페이지 맨 위에 닿았을 때 relative => fixed 로 변환
  const onScroll = () => {
    if (totalDivRef.current) {
      const totalDivTop = totalDivRef.current.getBoundingClientRect().top;
      if (totalDivTop <= 0) {
        setIsTotalRef(true);
      } else {
        setIsTotalRef(false);
      }
    }
  };

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [IsTotalRef]);

  const form = useForm<ProductInput>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      postMemo: '',
      payments: '',
      agreement: [],
    },
  });

  function onSubmit(data: ProductInput) {
    const { agreement, postMemo, payments } = data;
    if (agreement.length < 3) {
      alert('개인정보 수집/제공에 동의해주세요');
      return;
    }
    const BuyData = [
      productName,
      productNumber,
      productPrice,
      customer,
      phoneNumber,
      email,
      address,
      postMemo,
      point,
      coupon,
      payments,
      deliveryFee,
      agreement,
      agreement,
      postMemo,
      payments,
    ];
    alert(BuyData);
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-[90px]">
        <div className="text-4xl font-semibold mt-[85px]">결제하기</div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid p-0 w-[1050px] gap-[0px]">
            <div className="grid gap-[30px]">
              <>
                {/* 주문 상품 정보 */}
                <Product productName={productName} productNumber={productNumber} productPrice={productPrice} />
              </>
              <>
                {/* 주문자 정보 */}
                <Customer customer={customer} phoneNumber={phoneNumber} email={email} />
              </>
              <>
                {/* 배송자 정보 */}
                <Postservice formControlProp={form.control} address={address} />
              </>
            </div>
            <div ref={totalDivRef}>
              <div className="flex border-t-[2px] border-gray-200/15 pt-[50px]">
                <div className="grid justify-start justify-items-center w-[742px] pb-[300px]">
                  <>
                    {/* 쿠폰/포인트 */}
                    <Coupon point={point} productPrice={productPrice} />
                  </>
                  <>
                    {/* 결제 방법 */}
                    <Payment formControlProp={form.control} />
                  </>
                  <>
                    {/* 동의 */}
                    <Agreement formControlProp={form.control} />
                  </>
                  <Button type="submit" className="w-[320px] h-[70px] rounded-[8px] text-xl mt-[60px]">
                    13,520원 결제하기
                  </Button>
                </div>
                <>
                  {/* 결제 금액 */}
                  <div>
                    <Card
                      className={cn(
                        IsTotalRef
                          ? 'fixed top-[20px] grid w-[300px] border-none'
                          : 'relative grid w-[300px] border-none',
                      )}>
                      <Bill deliveryFee={deliveryFee} productPrice={productPrice} />
                    </Card>
                  </div>
                </>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
