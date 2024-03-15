import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { PaymentWidgetInstance, loadPaymentWidget, ANONYMOUS } from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';
import { useQuery } from '@tanstack/react-query';

// TODO: clientKey는 개발자센터의 결제위젯 연동 키 > 클라이언트 키로 바꾸세요.
// TODO: customerKey는 구매자와 1:1 관계로 무작위한 고유값을 생성하세요.
// @docs https://docs.tosspayments.com/reference/using-api/api-keys
const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
const customerKey = nanoid();

export default function Payment() {
  const { data: paymentWidget } = usePaymentWidget(clientKey, customerKey);
  // const { data: paymentWidget } = usePaymentWidget(clientKey, ANONYMOUS); // 비회원 결제
  const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance['renderPaymentMethods']> | null>(null);
  const agreementsWidgetRef = useRef<ReturnType<PaymentWidgetInstance['renderAgreement']> | null>(null);
  const [price, setPrice] = useState(50_000);
  useEffect(() => {
    if (paymentWidget == null) {
      return;
    }

    // ------  결제위젯 렌더링 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      '#payment-widget',
      { value: price },
      { variantKey: 'DEFAULT' },
    );

    paymentMethodsWidgetRef.current = paymentMethodsWidget;

    // ------  이용약관 렌더링 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자-옵션
    paymentWidget.renderAgreement('#agreement', {
      variantKey: 'AGREEMENT',
    });
  }, [paymentWidget]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    // ------ 금액 업데이트 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
    paymentMethodsWidget.updateAmount(price);
  }, [price]);
  return (
    <Accordion type="single" defaultValue="item-5" collapsible>
      <Card className="grid gap-[5px] border-none  w-[700px] ">
        <AccordionItem value="item-5">
          <AccordionTrigger className="mr-[20px]">
            <CardTitle className="text-[20px]">결제 방법</CardTitle>
          </AccordionTrigger>
          <AccordionContent>
            <CardContent className="">
              <div className="wrapper">
                <div className="box_section">
                  <div id="payment-widget" style={{ width: '100%' }} />
                  <div id="agreement" style={{ width: '100%' }} />
                  <div style={{ paddingLeft: '24px' }}>
                    <div className="checkable typography--p">
                      <label htmlFor="coupon-box" className="checkable__label typography--regular">
                        <input
                          id="coupon-box"
                          className="checkable__input"
                          type="checkbox"
                          aria-checked="true"
                          onChange={(event) => {
                            setPrice(event.target.checked ? price - 5_000 : price + 5_000);
                          }}
                        />
                        <span className="checkable__label-text">5,000원 쿠폰 적용</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Card>
    </Accordion>
  );
}
function usePaymentWidget(clientKey: string, customerKey: string) {
  return useQuery({
    queryKey: ['payment-widget', clientKey, customerKey],
    queryFn: () => {
      // ------  결제위젯 초기화 ------
      // @docs https://docs.tosspayments.com/reference/widget-sdk#sdk-설치-및-초기화
      return loadPaymentWidget(clientKey, customerKey);
    },
  });
}
