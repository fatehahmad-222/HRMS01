"use client";

import { Bell, CircleHelp } from "lucide-react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { HRMSSidebar } from "./HRMSSidebar";

export function HRMSLayout({ breadcrumb, children }: { breadcrumb: ReactNode; children: ReactNode }) {
  const router = useRouter();
  return <div className="min-h-screen bg-slate-50 text-slate-800">
    <header className="border-b border-slate-200 bg-white"><div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-7"><div className="flex min-w-0 items-center gap-2"><HRMSSidebar /><div className="truncate text-sm font-semibold text-slate-700">{breadcrumb}</div></div><div className="flex items-center gap-4 text-slate-500"><button aria-label="Notifications"><Bell className="h-4.5 w-4.5" /></button><button aria-label="Help"><CircleHelp className="h-4.5 w-4.5" /></button><button aria-label="Profile" onClick={() => router.push("/employee-profile")} className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-900 ring-2 ring-slate-100" /></div></div></header>
    {children}
  </div>;
}
