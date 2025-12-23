// components/ProtectedRoute.tsx
"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Example: check if user is logged in
  const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("adminToken");

  useEffect(() => {
    // If not logged in and not on login page, redirect
    if (!isLoggedIn && pathname !== "/admin/login") {
      router.push("/admin/login");
    }

    // If logged in and on login page, redirect to admin dashboard
    if (isLoggedIn && pathname === "/admin/login") {
      router.push("/admin");
    }
  }, [isLoggedIn, pathname, router]);

  // Optionally, show nothing until check is done
  if (!isLoggedIn && pathname !== "/admin/login") return null;

  return <>{children}</>;
};

export default ProtectedRoute;
