"use client";
import { usePathname } from "next/navigation";
import { AuthGuard } from "@/components/AuthGuard";

const PUBLIC_PATHS = ["/provider/login"];

export function SiteAuthGuard({ children }) {
  const pathname = usePathname();
  if (PUBLIC_PATHS.includes(pathname)) return children;
  return <AuthGuard>{children}</AuthGuard>;
}
