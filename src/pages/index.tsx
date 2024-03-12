import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import produc from '../../public/produc.jpeg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, X } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import kakaoPay from '../../public/kakaoPay.png';
import naverPay from '../../public/naverPay.png';
import tossPay from '../../public/tossPay.png';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export default function Home() {
  const totalDivRef = useRef<HTMLDivElement | null>(null);
  const [IsTotalRef, setIsTotalRef] = useState(false);

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

  return (
    <div>
      <div className="flex flex-col items-center gap-[90px]">
        <div className="text-4xl font-semibold mt-[85px]">결제하기</div>
        <div className="grid p-0 w-[1050px] gap-[0px]">
          {/* 왼쪽 div */}
          <div className="grid gap-[30px]">
            <Card className="grid gap-[5px] border-none">
              <CardTitle className="text-[20px]">주문 상품 정보</CardTitle>
              <CardContent className="flex border-black border-t-2 px-[5px] py-[15px] items-center">
                <Image className="w-[60px] h-[78px]" alt="제품 사진" src={produc} />
                <div className="w-[760px] px-[20px]">
                  <p>특&#41;산청 설향 딸기 500g</p>
                  <p>산청 설향 딸기 500g</p>
                </div>
                <p className="w-[100px]">1개</p>
                <div className="grid justify-items-end gap-[0px] w-[126px]">
                  <p>13,520원</p>
                  <p className="text-sm line-through">16,900원</p>
                </div>
              </CardContent>
            </Card>

            <Card className="grid gap-[5px] border-none">
              <CardTitle className="text-[20px]">주문자 정보</CardTitle>
              <CardContent className="grid border-black border-t-2 px-[5px] py-[15px] items-center">
                <div className="grid gap-[15px] mt-[10px]">
                  <div className="flex gap-[30px]">
                    <p className="w-[160px]">보내시는 분</p>
                    <p>홍길동</p>
                  </div>
                  <div className="flex gap-[30px]">
                    <p className="w-[160px]">휴대폰</p>
                    <p>010-1234-5678</p>
                  </div>
                  <div className="flex gap-[30px] mb-[10px]">
                    <p className="w-[160px]">이메일</p>
                    <p>next@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="grid gap-[5px] border-none">
              <CardTitle className="text-[20px]">배송 정보</CardTitle>
              <CardContent className="grid border-black border-t-2 px-[5px] py-[15px] items-center">
                <div className="grid gap-[15px] mt-[10px]">
                  <div className="flex gap-[30px]">
                    <p className="w-[160px]">배송지</p>
                    <div className="w-[270px] pb-[10px]">
                      <Badge variant="secondary" className="mb-[10px]">
                        기본배송지
                      </Badge>
                      <p>서울 ㅇㅇㅇ구 ㅇㅇ로 ㅇㅇ</p>
                    </div>
                    <Button variant="outline">변경</Button>
                  </div>

                  <Select>
                    <div className="flex gap-[30px]">
                      <p className="w-[160px]">배송 메모</p>
                      <SelectTrigger className="flex border-black">
                        <SelectValue className="border-black" placeholder="배송 메모를 선택해주세요" />
                        <ChevronDown />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="bg-slate-50 px-[7px] -translate-y-[17rem] translate-x-[12rem]">
                          <SelectLabel>배송 메모 선택</SelectLabel>
                          <SelectItem value="선택 안 함">선택 안 함</SelectItem>
                          <SelectItem value="직접 입력하기">직접 입력하기</SelectItem>
                          <SelectItem value="문 앞에 놔주세요">문 앞에 놔주세요</SelectItem>
                          <SelectItem value="부재 시 연락부탁드려요">부재 시 연락부탁드려요</SelectItem>
                          <SelectItem value="배송 전 미리 연락해 주세요">배송 전 미리 연락해 주세요</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </div>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
          <div ref={totalDivRef}>
            <div className="flex border-t-[2px] border-gray-200/15 pt-[50px]">
              <div className="grid justify-start justify-items-center w-[742px] pb-[300px]">
                <Card className="border-none h-[500px]">
                  <CardTitle className="text-[20px] pb-[10px]">쿠폰/포인트</CardTitle>
                  <CardContent className="flex gap-[40px] w-[700px] border-black border-t-2 px-[5px] py-[40px]">
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
                          <p className="font-semibold">2300</p>
                        </div>
                        <p>5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용가능</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="grid gap-[5px] border-none">
                  <CardTitle className="text-[20px]">결제 방법</CardTitle>
                  <CardContent className="flex w-[700px] gap-[40px] border-black border-t-2 px-[5px] py-[30px]">
                    <label>결제 방법 선택</label>
                    <div className="grid gap-[25px]">
                      <div className="flex gap-[25px]">
                        <div className="flex items-center gap-[15px]">
                          <Checkbox />
                          <label>신용카드</label>
                        </div>
                        <div className="flex items-center gap-[15px]">
                          <Checkbox />
                          <label>가상계좌</label>
                        </div>
                        <div className="flex items-center gap-[15px]">
                          <Checkbox />
                          <label>무통장 입금</label>
                        </div>
                        <div className="flex items-center gap-[15px]">
                          <Checkbox />
                          <label>핸드폰 결제</label>
                        </div>
                      </div>
                      <div className="flex gap-[20px]">
                        <Checkbox className="mt-[7px]" />
                        <Card className="grid w-[450px] h-[60px] place-content-center rounded-[8px] text-lg font-semibold">
                          <Image alt="카카오페이" src={kakaoPay} className="w-[85px] h-[26px]" />
                        </Card>
                      </div>
                      <div className="flex gap-[20px]">
                        <Checkbox className="mt-[7px]" />
                        <Card className="grid w-[450px] h-[60px] place-content-center rounded-[8px] text-lg font-semibold">
                          <Image alt="네이버페이" src={naverPay} className="w-[90px] h-[35px]" />
                        </Card>
                      </div>
                      <div className="flex gap-[20px]">
                        <Checkbox className="mt-[7px]" />
                        <Card className="grid w-[450px] h-[60px] place-content-center rounded-[8px] text-lg font-semibold ">
                          <Image alt="토스페이" src={tossPay} className="w-[150px] h-[40px]" />
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="grid gap-[5px] border-none">
                  <CardTitle className="text-[20px]">개인정보 수집/제공</CardTitle>
                  <CardContent className="grid gap-[20px] w-[700px] border-black border-t-2 px-[5px] py-[30px]">
                    <div className="flex items-center gap-[15px]">
                      <Checkbox />
                      <p>개인정보 수집 이용 및 처리 동의</p>
                    </div>
                    <div className="flex items-center gap-[15px]">
                      <Checkbox />
                      <p>전자지급 결제대행 서비스 이용약관 동의</p>
                    </div>
                    <div className="flex items-center gap-[15px] text-xl font-semibold">
                      <Checkbox />
                      <p>위 내용을 확인 하였으며 결제에 동의합니다.</p>
                    </div>
                  </CardContent>
                </Card>
                <Button className="w-[320px] h-[70px] rounded-[8px] text-xl mt-[60px]">13,520원 결제하기</Button>
              </div>
              <div>
                {/* "fixed top-[20px] grid gap-[20px] w-[300px] border-none" */}
                <Card
                  className={cn(
                    IsTotalRef
                      ? 'fixed top-[20px] grid gap-[20px] w-[300px] border-none'
                      : 'relative grid gap-[20px] w-[300px] border-none',
                  )}>
                  <CardTitle className="text-[20px]">결제 금액</CardTitle>
                  <CardContent className="grid gap-[20px] bg-gray-100 ">
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
                      <p>+2500</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-lg">총 결제금액</p>
                      <p>19,500원</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-lg">포인트 적립예정</p>
                      <p>700</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
