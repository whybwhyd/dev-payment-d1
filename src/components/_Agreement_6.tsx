import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { propsType } from '@/pages';

export default function Agreement(props: propsType) {
  const { formControlProp } = props;
  const items = [
    { id: 'personalAgree', label: '개인정보 수집 이용 및 처리 동의' },
    { id: 'serviceAgree', label: '전자지급 결제대행 서비스 이용약관 동의' },
    { id: 'totalAgree', label: '위 내용을 확인 하였으며 결제에 동의합니다.' },
  ] as const;

  return (
    <FormField
      control={formControlProp}
      name="agreement"
      render={() => (
        <FormItem>
          <Card className="grid gap-[5px] border-none mt-[50px]">
            <CardTitle className="text-[20px]">개인정보 수집/제공</CardTitle>
            <CardContent className="grid gap-[20px] w-[700px] border-black border-t-2 px-[5px] py-[30px]">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={formControlProp}
                  name="agreement"
                  render={({ field }) => {
                    return (
                      <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            id={item.id}
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(field.value?.filter((value) => value !== item.id));
                            }}
                          />
                        </FormControl>
                        <p className="font-normal">{item.label}</p>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </CardContent>
          </Card>
        </FormItem>
      )}
    />
  );
}
