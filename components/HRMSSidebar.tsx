"use client";

import { Bell, Box, Briefcase, Building2, Calendar, ChevronDown, ClipboardList, DollarSign, Home, Mail, Menu, Package, Settings, Table2, Users } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SalesActivityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="6" y1="14" x2="6" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="18" y1="9" x2="18" y2="20" />
    </svg>
  );
}

const items = [
  [Home, "Home"], [SalesActivityIcon, "Sales Activity"], [Calendar, "Reservations & Tables"], [Table2, "Menu Management"], [Users, "Customers"], [Box, "Inventory"],
  [Users, "Users & Access"], [Mail, "Email Campaigns"], [Bell, "AI Call Analytics"], [DollarSign, "Finances"], [ClipboardList, "Reports"], [Settings, "Business Settings"], [Building2, "Store Management"], [Package, "Integrations"],
] as const;

export function HRMSSidebar({ onMenuClick }: { onMenuClick?: () => void }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHrmsExpanded, setIsHrmsExpanded] = useState(false);
  const home = () => { router.push("/"); setIsSidebarOpen(false); };
  const go = (path: string) => { router.push(path); setIsSidebarOpen(false); };

  return <>
    <button type="button" aria-label="Open navigation" onClick={() => { setIsSidebarOpen(true); onMenuClick?.(); }} className="rounded-md p-1 text-slate-600 hover:bg-slate-100 hover:text-slate-900"><Menu className="h-5 w-5" /></button>
    <div onClick={() => setIsSidebarOpen(false)} className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity ${isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} />
    <aside className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col bg-zinc-950 px-4 py-5 shadow-2xl transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button type="button" onClick={home} className="mb-6 flex items-center gap-2 px-1 text-left"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#24c162] text-lg font-bold text-white">Z</span><span className="text-lg font-bold text-white">Zyappy</span></button>
      <nav className="flex-1 space-y-1 overflow-y-auto no-scrollbar">
        {items.slice(0, 6).map(([Icon, label]) => <button key={label} type="button" onClick={home} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5"><Icon className="h-4.5 w-4.5 text-slate-400" />{label}</button>)}
        <div className={`overflow-hidden rounded-lg ${isHrmsExpanded ? "bg-[#16a34a]" : ""}`}>
          <div className={`flex items-center ${isHrmsExpanded ? "bg-[#24c162]" : ""}`}><button type="button" onClick={home} className={`flex min-w-0 flex-1 items-center gap-3 rounded-l-lg px-3 py-2.5 text-sm ${isHrmsExpanded ? "font-bold text-white" : "text-slate-300 hover:bg-white/5"}`}><Briefcase className="h-4.5 w-4.5 text-slate-300" />HRMS</button><button type="button" aria-label="Toggle HRMS menu" onClick={(event) => { event.stopPropagation(); setIsHrmsExpanded((value) => !value); }} className="rounded-r-lg p-2.5 text-white"><ChevronDown className={`h-4 w-4 transition-transform ${isHrmsExpanded ? "rotate-180" : ""}`} /></button></div>
          {isHrmsExpanded && <div className="space-y-1 pb-3 pl-9 pr-2 text-sm text-white/90"><button type="button" onClick={home} className="block w-full py-1 text-left hover:text-white">&bull;&nbsp; Hardware</button><button type="button" onClick={home} className="block w-full py-1 text-left hover:text-white">&bull;&nbsp; Workplace</button><button type="button" onClick={() => go("/announcements")} className="block w-full py-1 text-left hover:text-white">&bull;&nbsp; Announcements</button><button type="button" onClick={() => go("/holiday-calendar")} className="block w-full py-1 text-left hover:text-white">&bull;&nbsp; Holiday Calendar</button><button type="button" onClick={home} className="block w-full py-1 text-left hover:text-white">&bull;&nbsp; HR Policies</button></div>}
        </div>
        {items.slice(6).map(([Icon, label]) => <button key={label} type="button" onClick={home} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5"><Icon className="h-4.5 w-4.5 text-slate-400" />{label}</button>)}
      </nav>
      <div className="mt-5 rounded-xl bg-white/[0.05] px-3 py-3"><p className="text-xs font-bold text-white">V 2.1.0</p><p className="mt-1 text-[11px] text-slate-500">Singh Hotel Management</p></div>
    </aside>
  </>;
}