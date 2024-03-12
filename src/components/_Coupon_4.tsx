import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
interface CouponPropsType {
  point: string;
}
export default function Coupon(props: CouponPropsType) {
  const { point } = props;
  return (
    <Accordion type="single" defaultValue="item-4" collapsible>
      <Card className="border-none  w-[700px] h-[500px]">
        <AccordionItem value="item-4">
          <AccordionTrigger className="mr-[20px]">
            <CardTitle className="text-[20px] pb-[10px]">쿠폰/포인트</CardTitle>
          </AccordionTrigger>
          <AccordionContent>
            <CardContent className="flex gap-[40px] border-black border-t-2 px-[5px] py-[40px]">
              <label>쿠폰/포인트</label>
              <div className="grid gap-[20px]">
                <div>
                  <p className="mb-[10px]">쿠폰</p>
                  <Button className="hidden">
                    <X />
                  </Button>
                  <div className="flex gap-[8px] w-[480px]">
                    <Input className=" bg-gray-100" />
                    <Button variant="outline">쿠폰적용</Button>
                  </div>
                </div>
                <div>
                  <p>쿠폰 번호</p>
                  <div className="flex gap-[8px] w-[480px]">
                    <Input className=" bg-gray-100" />
                    <Button variant="outline">번호확인</Button>
                  </div>
                </div>
                <div>
                  <p>포인트</p>
                  <div className="flex gap-[8px] w-[480px]">
                    <Input className=" bg-gray-100" />
                    <Button variant="outline">전액사용</Button>
                  </div>
                </div>
                <div>
                  <div className="flex gap-[10px] w-[480px]">
                    <p>보유 포인트</p>
                    <p className="font-semibold">{point}</p>
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
