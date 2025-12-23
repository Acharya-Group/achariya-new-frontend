"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAdminLogin } from "../../../hooks/admin";
import { AxiosError } from "axios";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useAdminLogin();

const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  loginMutation.mutate(
    { email, password },
    {
      onSuccess: () => router.push("/admin"),
      onError: (err: unknown) => {
        // Type guard for AxiosError
        if (err instanceof AxiosError) {
          alert(err.response?.data?.message || "Login failed");
        } else {
          alert("Login failed");
        }
      },
    }
  );
};

  const isLoading = loginMutation.status === "pending";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Floating animated circles */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 top-10 left-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-indigo-500 rounded-full opacity-20 bottom-20 right-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Login card */}
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl"
      >
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold text-center text-white mb-6"
          >
            Admin Login
          </motion.h2>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />

            <motion.input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #8b5cf6" }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 cursor-pointer py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}
