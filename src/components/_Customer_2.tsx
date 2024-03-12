import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

interface CustomerPropsType {
  customer: string;
  phoneNumber: string;
  email: string;
}
export default function Customer(props: CustomerPropsType) {
  const { customer, phoneNumber, email } = props;
  return (
    <Accordion type="single" defaultValue="item-2" collapsible>
      <Card className="grid gap-[5px] border-none">
        <AccordionItem value="item-2">
          <AccordionTrigger className="mr-[20px]">
            <CardTitle className="text-[20px]">주문자 정보</CardTitle>
          </AccordionTrigger>
          <AccordionContent>
            <CardContent className="grid border-black border-t-2 px-[5px] py-[15px] items-center">
              <div className="grid gap-[15px] mt-[10px]">
                <div className="flex gap-[30px]">
                  <p className="w-[160px]">보내시는 분</p>
                  <p>{customer}</p>
                </div>
                <div className="flex gap-[30px]">
                  <p className="w-[160px]">휴대폰</p>
                  <p>{phoneNumber}</p>
                </div>
                <div className="flex gap-[30px] mb-[10px]">
                  <p className="w-[160px]">이메일</p>
                  <p>{email}</p>
                </div>
              </div>
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Card>
    </Accordion>
  );
}
