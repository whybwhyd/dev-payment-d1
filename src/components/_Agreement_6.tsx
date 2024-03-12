import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export default function Agreement() {
  return (
    <Card className="grid gap-[5px] border-none mt-[50px]">
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
  );
}
