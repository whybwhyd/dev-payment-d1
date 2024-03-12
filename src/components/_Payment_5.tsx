import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import kakaoPay from '../../public/kakaoPay.png';
import naverPay from '../../public/naverPay.png';
import tossPay from '../../public/tossPay.png';
import { propsType } from '@/pages';

export default function Payment(props: propsType) {
  const { formControlProp } = props;
  return (
    <Accordion type="single" defaultValue="item-5" collapsible>
      <Card className="grid gap-[5px] border-none  w-[700px] ">
        <AccordionItem value="item-5">
          <AccordionTrigger className="mr-[20px]">
            <CardTitle className="text-[20px]">결제 방법</CardTitle>
          </AccordionTrigger>
          <AccordionContent>
            <FormField
              name="payment"
              control={formControlProp}
              render={({ field }) => (
                <FormItem>
                  <CardContent className="flex gap-[40px] border-black border-t-2 px-[5px] py-[30px]">
                    <FormLabel>결제 방법 선택</FormLabel>
                    <FormControl>
                      <div className="grid gap-[25px]">
                        <div className="flex gap-[25px]">
                          <div className="flex items-center gap-[15px]">
                            <Checkbox {...field} />
                            <label>신용카드</label>
                          </div>
                          <div className="flex items-center gap-[15px]">
                            <Checkbox {...field} />
                            <label>가상계좌</label>
                          </div>
                          <div className="flex items-center gap-[15px]">
                            <Checkbox {...field} />
                            <label>무통장 입금</label>
                          </div>
                          <div className="flex items-center gap-[15px]">
                            <Checkbox {...field} />
                            <label>핸드폰 결제</label>
                          </div>
                        </div>
                        <div className="flex gap-[20px]">
                          <Checkbox className="mt-[7px]" {...field} />
                          <Card className="grid w-[450px] h-[60px] place-content-center rounded-[8px] text-lg font-semibold">
                            <Image alt="카카오페이" src={kakaoPay} className="w-[85px] h-[26px]" />
                          </Card>
                        </div>
                        <div className="flex gap-[20px]">
                          <Checkbox className="mt-[7px]" {...field} />
                          <Card className="grid w-[450px] h-[60px] place-content-center rounded-[8px] text-lg font-semibold">
                            <Image alt="네이버페이" src={naverPay} className="w-[90px] h-[35px]" />
                          </Card>
                        </div>
                        <div className="flex gap-[20px]">
                          <Checkbox className="mt-[7px]" {...field} />
                          <Card className="grid w-[450px] h-[60px] place-content-center rounded-[8px] text-lg font-semibold ">
                            <Image alt="토스페이" src={tossPay} className="w-[150px] h-[40px]" />
                          </Card>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </CardContent>
                </FormItem>
              )}
            />
          </AccordionContent>
        </AccordionItem>
      </Card>
    </Accordion>
  );
}
