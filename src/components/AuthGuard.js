"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { C } from "@/constants/colors";

export function AuthGuard({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/provider/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: C.gray, fontSize: 15 }}>Loading…</div>
      </div>
    );
  }

  return children;
}
