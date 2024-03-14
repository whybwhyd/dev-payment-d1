import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { paymentsLists } from '@/data/_paymentLists';
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
              control={formControlProp}
              name="payments"
              render={() => (
                <FormItem>
                  <CardContent className="flex gap-[40px] border-black border-t-2 px-[5px] py-[30px]">
                    <p>결제 방법 선택</p>
                    <div className="grid gap-[25px]">
                      <div className="flex gap-[25px]">
                        {paymentsLists.slice(0, 4).map((payment) => (
                          <FormField
                            key={payment.id}
                            control={formControlProp}
                            name="payments"
                            render={({ field }) => {
                              return (
                                <FormItem key={payment.id}>
                                  <div className="flex gap-[10px]">
                                    <FormControl>
                                      <Checkbox
                                        id={payment.id}
                                        checked={field.value === payment.id}
                                        onCheckedChange={(checked) => {
                                          return checked ? field.onChange(payment.id) : field.onChange(null);
                                        }}
                                      />
                                    </FormControl>
                                    <p className="font-normal">{payment.label}</p>
                                  </div>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <div className="grid gap-[25px]">
                        {paymentsLists.slice(4).map((payment) => (
                          <FormField
                            key={payment.id}
                            control={formControlProp}
                            name="payments"
                            render={({ field }) => {
                              return (
                                <FormItem key={payment.id}>
                                  <div className="flex gap-[10px]">
                                    <FormControl>
                                      <Checkbox
                                        id={payment.id}
                                        checked={field.value === payment.id}
                                        onCheckedChange={(checked) => {
                                          return checked ? field.onChange(payment.id) : field.onChange(null);
                                        }}
                                      />
                                    </FormControl>
                                    <p className="font-normal">{payment.id}</p>
                                  </div>
                                  <Card className="grid w-[450px] h-[60px] place-content-center rounded-[8px] text-lg font-semibold">
                                    <Image
                                      alt={payment.id}
                                      src={`/${payment.label}.png`}
                                      width={85}
                                      height={26}
                                      className="w-[85px] h-[26px]"
                                    />
                                  </Card>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                    </div>
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
