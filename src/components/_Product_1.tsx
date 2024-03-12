import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import produce from '../../public/produce.jpeg';

interface ProductType {
  productName: string;
  productNumber: string;
  productPrice: string;
}
export default function Product(props: ProductType) {
  const { productName, productNumber, productPrice } = props;
  return (
    <Accordion type="single" defaultValue="item-1" collapsible>
      <Card className="grid gap-[5px] border-none">
        <AccordionItem value="item-1">
          <AccordionTrigger className="mr-[20px]">
            <CardTitle className="text-[20px]">주문 상품 정보</CardTitle>
          </AccordionTrigger>
          <AccordionContent>
            <CardContent className="flex border-black border-t-2 px-[5px] py-[15px] items-center">
              <Image className="w-[60px] h-[78px]" alt="제품 사진" src={produce} />
              <div className="w-[760px] px-[20px]">
                <p>{productName}</p>
              </div>
              <p className="w-[100px]">{productNumber}개</p>
              <div className="grid justify-items-end gap-[0px] w-[126px]">
                <p>{productPrice}원</p>
                <p className="text-sm line-through">16,900원</p>
              </div>
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Card>
    </Accordion>
  );
}
