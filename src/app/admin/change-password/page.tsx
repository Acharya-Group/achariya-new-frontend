"use client";

import AdminLayout from "@/componets/admin/AdminLayout";
import React, { useState } from "react";
import { useUpdatePassword, useVerifyPassword } from "@/hooks/admin";
import { AxiosError } from "axios";

const Page = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [verified, setVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const verifyPasswordMutation = useVerifyPassword();
  const updatePasswordMutation = useUpdatePassword();

 const handleVerify = (e: React.FormEvent) => {
  e.preventDefault();

  verifyPasswordMutation.mutate(
    { password: currentPassword },
    {
      onSuccess: (res) => {
        if (res.success) {
          setVerified(true);
          alert("Current password verified ✅");
        } else {
          alert("Current password is incorrect ❌");
        }
      },
      onError: (err: unknown) => {
        if (err instanceof AxiosError) {
          alert(err.response?.data?.message || "Failed to verify password ❌");
        } else {
          alert("Failed to verify password ❌");
        }
      },
    }
  );
};

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    updatePasswordMutation.mutate(
      { currentPassword, newPassword },
      {
        onSuccess: (res) => {
          alert(res.message || "Password updated successfully ✅");
          setCurrentPassword("");
          setNewPassword("");
          setConfirmPassword("");
          setVerified(false);
        },
        onError: (err: unknown) => {
          const error = err as AxiosError<{ message: string }>;
  alert(error.response?.data?.message || "Faild To Update Password");
        },
      }
    );
  };

  const isLoading =
    verifyPasswordMutation.status === "pending" ||
    updatePasswordMutation.status === "pending";

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md max-w-md">
        <h1 className="text-2xl font-bold mb-6">Change Password</h1>

        {!verified ? (
          <form onSubmit={handleVerify} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#7a0706] cursor-pointer text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#261b7d] transition transform hover:scale-[1.02] disabled:opacity-50"
            >
              {verifyPasswordMutation.status === "pending" ? "Verifying..." : "Verify Password"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a0706] focus:border-[#7a0706] hover:border-[#7a0706] transition"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#7a0706] cursor-pointer text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#261b7d] transition transform hover:scale-[1.02] disabled:opacity-50"
            >
              {updatePasswordMutation.status === "pending" ? "Updating..." : "Update Password"}
            </button>
          </form>
        )}
      </div>
    </AdminLayout>
  );
};

export default Page;
