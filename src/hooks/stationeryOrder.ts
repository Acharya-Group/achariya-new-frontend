import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export interface StationeryItem {
  _id?: string;
  type: string;
  rateOnLessQuantity?: number;
  quantityThreshold?: number;
  rateOnGreaterQuantity?: number;
  quantity: number;
}

export interface PaginatedOrders {
  success: boolean;
  message: string;
  data: StationeryOrder[];
  page: number;
  total: number;
  totalPages: number;
}
export interface StationeryOrder {
  _id: string;
  name: string;
  phoneNo: string;
  kioskId: string;
  address: string;
  pinCode: string;
  amount?: number;
  items: StationeryItem[];
  status?: string;
  transactionId?: string;
  paymentStatus?: "unpaid" | "paid" | "failed" | "refunded";
  createdAt?: string;
  updatedAt?: string;
  email?: string;
}

export interface PaymentDetails {
  amount: number;
  name: string;
  email: string;
  phone: string;
  orderId: string;
}

export interface PayUResponseData {
  action: string;
  key: string;
  txnid: string;
  amount: string;
  firstname: string;
  email: string;
  phone: string;
  productinfo: string;
  surl: string;
  furl: string;
  hash: string;
}

export interface PayUResponse {
  success: boolean;
  data: PayUResponseData;
}

type CreateOrderInput = Omit<StationeryOrder, "_id" | "createdAt" | "updatedAt">;


const useStationeryOrder = (page: number = 1, limit: number = 20) => {
  const queryClient = useQueryClient();

  // ✅ Get all orders with pagination
  const allOrders = useQuery<PaginatedOrders, Error>({
    queryKey: ["stationeryOrders", page, limit],
    queryFn: async () => {
      const { data } = await api.get("/Order", {
        params: { page, limit },
      });
      return data;
    },
    // We'll set initialData to a structure that matches PaginatedOrders
    initialData: {
      success: true,
      message: "Initial",
      data: [],
      page: 1,
      total: 0,
      totalPages: 0,
    },
  });
  // ✅ Create order
  const createOrder = useMutation<StationeryOrder, Error, CreateOrderInput>({
    mutationFn: async (newOrder) => {
      const { data } = await api.post("/Order", newOrder);
      return data.data;
    },
    onSuccess: (newOrder) => {
      queryClient.setQueryData<StationeryOrder[]>(["stationeryOrders"], (old = []) => [
        ...old,
        newOrder,
      ]);
    },
  });

  // ✅ Update order
  const updateOrder = useMutation<StationeryOrder, Error, StationeryOrder>({
    mutationFn: async (updatedOrder) => {
      const { data } = await api.put(`/Order/${updatedOrder._id}`, updatedOrder);
      return data.data;
    },
    onSuccess: (updatedOrder) => {
      queryClient.setQueryData<StationeryOrder[]>(["stationeryOrders"], (old = []) =>
        old.map((o) => (o._id === updatedOrder._id ? updatedOrder : o))
      );
    },
  });

  // ✅ Delete order
  const deleteOrder = useMutation<string, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/Order/${id}`);
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<StationeryOrder[]>(["stationeryOrders"], (old = []) =>
        old.filter((o) => o._id !== id)
      );
    },
  });

  // 💳 Initiate PayU payment (strictly typed)
  const initiatePayment = useMutation<PayUResponse, Error, PaymentDetails>({
    mutationFn: async (paymentDetails) => {
      const { data } = await api.post<PayUResponse>("/Payment/initiate", paymentDetails);
      if (!data.data?.action) {
        throw new Error("Payment data not returned by backend");
      }
      return data;
    },
  });

  return {
    allOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    initiatePayment,
  };
};

export default useStationeryOrder;
