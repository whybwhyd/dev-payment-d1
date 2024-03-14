import { orderFormState } from '@/recoil/orderFormState';
import { useRecoilValue } from 'recoil';

export default function orderForm() {
  const [order, setOrder] = useRecoilValue(orderFormState);
  const {} = order;
  return (
    <div>
      <div></div>
    </div>
  );
}
