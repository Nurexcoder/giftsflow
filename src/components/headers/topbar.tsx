"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Gift } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Gift className="w-6 h-6 text-amber-600" />
          <span className="text-lg font-bold tracking-tight">GiftsFlow</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/gifts" className="hover:text-amber-600">
            Try AI
          </Link>
          <Link href="/portal" className="hover:text-amber-600">
            Add Products
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-sm">
          <Link href="/gifts" onClick={() => setOpen(false)} className="block hover:text-amber-600">
            Try AI
          </Link>
          <Link href="/portal" onClick={() => setOpen(false)} className="block hover:text-amber-600">
            Add Products
          </Link>
        </div>
      )}
    </header>
  );
}
