import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { propsType } from '@/pages';

interface PostserviceType extends propsType {
  address: string;
  addressMemo: string;
}
export default function Postservice(props: PostserviceType) {
  const { formControlProp, address, addressMemo } = props;
  return (
    <Accordion type="single" defaultValue="item-3" collapsible>
      <Card className="grid gap-[5px] border-none">
        <AccordionItem value="item-3">
          <AccordionTrigger className="mr-[20px]">
            <CardTitle className="text-[20px]">배송 정보</CardTitle>
          </AccordionTrigger>
          <AccordionContent>
            <CardContent className="grid border-black border-t-2 px-[5px] py-[15px] items-center">
              <div className="grid gap-[15px] mt-[10px]">
                <div className="flex gap-[30px]">
                  <p className="w-[160px]">배송지</p>
                  <div className="w-[270px] pb-[10px]">
                    <Badge variant="secondary" className="mb-[10px]">
                      기본배송지
                    </Badge>
                    <p>{address}</p>
                  </div>
                  <Button variant="outline">변경</Button>
                </div>
                <FormField
                  control={formControlProp}
                  name="postMemo"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} value={field.value.toString()}>
                        <div className="flex justify-items-center gap-[30px]">
                          <p className="w-[160px]">배송 메모</p>
                          <div>
                            <FormControl>
                              <SelectTrigger className="flex">
                                <SelectValue
                                  id="postMemo"
                                  placeholder="배송 메모를 선택해주세요"
                                  aria-label={field.value}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectGroup className="grid px-[7px]">
                                <SelectLabel>배송 메모 선택</SelectLabel>
                                <SelectItem value="선택 안 함">선택 안 함</SelectItem>
                                <SelectItem value="직접 입력하기">직접 입력하기</SelectItem>
                                <SelectItem value="문 앞에 놔주세요">문 앞에 놔주세요</SelectItem>
                                <SelectItem value="부재 시 연락부탁드려요">부재 시 연락부탁드려요</SelectItem>
                                <SelectItem value="배송 전 미리 연락해 주세요">배송 전 미리 연락해 주세요</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </div>
                        </div>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Card>
    </Accordion>
  );
}
