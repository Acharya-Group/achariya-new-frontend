import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface Admin {
  _id: string;
  username: string;
  email: string;
}

export interface LoginResponse {
  message: string;
  admin: Admin;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface VerifyPasswordPayload {
  password: string;
}

export interface VerifyPasswordResponse {
  success: boolean;
  message: string;
}

export interface UpdatePasswordPayload {
  currentPassword: string;
  newPassword: string;
}

export interface UpdatePasswordResponse {
  message: string;
}

// ✅ Login hook stays unchanged
export const useAdminLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, unknown, LoginCredentials>({
    mutationFn: async (credentials) => {
      const { data } = await api.post("/admin/login", credentials);
      return data;
    },
    onSuccess: (data) => {
      localStorage.setItem("adminToken", data.token);
      queryClient.setQueryData(["admin"], data.admin);
    },
  });
};

// ✅ Update password hook
export const useUpdatePassword = () => {
  return useMutation<UpdatePasswordResponse, unknown, UpdatePasswordPayload>({
    mutationFn: async (payload: UpdatePasswordPayload) => {
      const token = localStorage.getItem("adminToken");
      const { data } = await api.put("/admin/update-password", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    },
  });
};

// ✅ Verify password hook
export const useVerifyPassword = () => {
  return useMutation<VerifyPasswordResponse, unknown, VerifyPasswordPayload>({
    mutationFn: async (payload: VerifyPasswordPayload) => {
      const token = localStorage.getItem("adminToken");
      const { data } = await api.post("/admin/verify-password", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    },
  });
};
