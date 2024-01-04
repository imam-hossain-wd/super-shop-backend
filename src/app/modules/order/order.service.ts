import { Order } from "./order.model";
import { IOrder } from "./order.interfece";


const createOrder = async (OrderData:IOrder) : Promise<IOrder> => {
    const result = await Order.create(OrderData);
    return result
}

const getOrders = async () : Promise<IOrder[] | null> => {
    const result = await Order.find();
    return result
}
const getSingleOrder = async (OrderId:string) : Promise<IOrder | null> => {
    const result = await Order.findById(OrderId);
    console.log(result);
    return result
}

const updateOrder = async (OrderId:string, updatedOrderData:Partial<IOrder>) : Promise<IOrder | null> => {
 
    const result = await Order.findByIdAndUpdate(OrderId, updatedOrderData, { new: true });
    return result;
}

const deleteOrder = async (OrderId:string) => {
    const result = await Order.findByIdAndDelete(OrderId);
    return result
}





export const OrderService = {
    createOrder,
    getOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder,
}