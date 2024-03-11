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
import { CornerDownRight } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { useEffect, useRef, useState } from 'react';

export default function Home() {
  //   const [isSticky, setIsSticky] = useState(false);
  //   const ref = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (ref.current) {
  //         // 스크롤 위치가 요소의 상단보다 아래에 있으면 relative로 유지
  //         if (window.scrollY < ref.current.offsetTop) {
  //           setIsSticky(false);
  //         } else {
  //           // 스크롤 위치가 요소의 상단을 넘어가면 fixed로 변경
  //           setIsSticky(true);
  //         }
  //       }
  //     };

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }, []);
  return (
    <div>
      <div className="flex flex-col items-center gap-[90px]">
        {/* 주문페이지 추가할 지 고민하기 */}

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

          <div className="flex border-t-[2px] border-gray-200/15 pt-[50px]">
            <div className="grid w-[742px]">
              <Card className="border-none h-[500px]">
                <CardTitle className="text-[20px] pb-[10px]">쿠폰/포인트</CardTitle>
                <CardContent className="grid gap-[20px] w-[700px] border-black border-t-2 px-[5px] py-[15px] items-center">
                  <div>
                    <p className="mb-[10px]">쿠폰</p>
                    <Button className="hidden">
                      <X />
                    </Button>
                    <div className="flex w-[480px]">
                      <Input />
                      <Button>쿠폰적용</Button>
                    </div>
                  </div>
                  <div>
                    <p>쿠폰 번호</p>
                    <div className="flex w-[480px]">
                      <Input />
                      <Button>번호확인</Button>
                    </div>
                  </div>
                  <div>
                    <p>포인트</p>
                    <div className="flex w-[480px]">
                      <Input />
                      <Button>전액사용</Button>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-[10px] w-[480px]">
                      <p>보유 포인트</p>
                      <p className="font-semibold">2300</p>
                    </div>
                    <p>5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용가능</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="grid gap-[5px] border-none">
                <CardTitle className="text-[20px]">결제 방법</CardTitle>
                <CardContent className="grid border-black border-t-2 px-[5px] py-[15px] items-center">
                  <div className="grid gap-[15px] mt-[10px]">
                    <div className="flex gap-[15px]">
                      <div>
                        <Checkbox />
                        <label>신용카드</label>
                      </div>
                      <div>
                        <Checkbox />
                        <label>가상계좌</label>
                      </div>
                    </div>
                    <div className="flex gap-[15px]">
                      <div>
                        <Checkbox />
                        <label>무통장 입금</label>
                      </div>
                      <div>
                        <Checkbox />
                        <label>핸드폰 결제</label>
                      </div>
                    </div>
                    <div>
                      <Checkbox />
                      <label>카카오페이</label>
                    </div>
                  </div>
                  <div className="border-b-2">
                    {/* 무통장입금 시 나오는 select */}
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="거래 은행을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>거래 은행을 선택해주세요</SelectLabel>
                          <SelectItem value="ㅇㅇ은행: 000-00-0000 예금주명">ㅇㅇ은행: 000-00-0000 예금주명</SelectItem>
                          <SelectItem value="xx은행">xx은행: 000-00-0000 예금주명</SelectItem>
                          <SelectItem value="@@은행">@@은행: 000-00-0000 예금주명</SelectItem>
                          <SelectItem value="##은행">##은행: 000-00-0000 예금주명</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Input placeholder="입금자명 (미입력시 주문자명)" />
                    <p>주문 후 n시간 동안 미입금시 자동 취소됩니다.</p>
                  </div>
                  <div className="flex gap-[15px]">
                    <Checkbox />
                    <label>현금영수증 신청</label>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none h-[500px]">
                <CardTitle className="text-[20px]">
                  <Checkbox />
                  <label>전체 동의</label>
                </CardTitle>
                <CardContent>
                  <Checkbox />
                  <label>구매조건 확인 및 결제 진행에 동의</label>
                </CardContent>
                <Button>결제하기</Button>
              </Card>
            </div>
            <div>
              <div>
                <Card className="bg-gray-100 w-[300px]">
                  <CardTitle className="ml-[27px] mb-[10px] text-[28px]">최종 결제금액</CardTitle>
                  <CardContent className="grid gap-[20px]">
                    <div className="flex gap-[10px] border-b-2  pb-[10px]">
                      <p className="text-lg font-semibold">상품가격</p>
                      <div className="text-lg font-semibold">
                        <p>18,000원</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg">쿠폰 할인</p>
                      <div className="flex gap-[5px]">
                        <CornerDownRight color="gray" />
                        <p>-1000원</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg">포인트 사용</p>
                      <div className="flex gap-[5px]">
                        <CornerDownRight color="gray" />
                        <p>-0원</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg">배송비</p>
                      <div className="flex gap-[5px]">
                        <CornerDownRight color="gray" />
                        <p>+2500</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg">총 결제금액</p>
                      <div className="flex gap-[5px]">
                        <CornerDownRight color="gray" />
                        <p>19,500원</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg">포인트 적립예정</p>
                      <div className="flex gap-[5px]">
                        <CornerDownRight color="gray" />
                        <p>700</p>
                      </div>
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
