import { ref } from 'vue';
import { ElMessage } from 'element-plus/lib/components/index.js';
import { reqAddOrder } from '@/api/order';
import { ReqAddOrder } from '@/api/order/type';
import { TimeSelectRef, d, t, radio1, remark } from './index.vue';

export const sendOrder = async () => {
console.log('------------', TimeSelectRef.value);
await TimeSelectRef.value?.save();
let takeTime = new Date(d.value);
const [hours, minutes] = t.value.split(':').map(Number);
takeTime.setHours(hours, minutes, 0, 0);
const order = ref<ReqAddOrder>({
takeTime: takeTime,
addressId: radio1.value,
remark: remark.value,
});
// reqAddOrder()
let res: OrderResponseData = await reqAddOrder(order.value);

if (res.code === 200) {
} else {
ElMessage({
type: 'error',
message: '搜尋失败',
});
}
};
