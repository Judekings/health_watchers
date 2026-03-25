"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "../../i18n";

interface NavLink { href: string; label: string; }

export default function NavbarClient({ links, locale }: { links: NavLink[]; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Hide navbar on /login
  if (pathname === "/login") return null;

  const handleLogout = () => {
    // Clear auth token and redirect to login
    document.cookie = "token=; Max-Age=0; path=/";
    localStorage.removeItem("token");
    router.push("/login");
  };

  const linkClass = (href: string) =>
    `text-sm focus:outline-none focus:underline transition-colors ${
      pathname === href
        ? "font-semibold text-blue-600 border-b-2 border-blue-600 pb-0.5"
        : "text-gray-700 hover:text-gray-900"
    }`;

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:bg-white focus:border focus:border-gray-400 focus:rounded">
        Skip to main content
      </a>

      <nav aria-label="Main navigation" className="border-b border-gray-200 bg-white" ref={menuRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="font-semibold text-gray-900 text-sm sm:text-base">
              Health Watchers
            </Link>

            {/* Desktop */}
            <ul className="hidden md:flex gap-6 list-none m-0 p-0" role="list">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass(l.href)}>{l.label}</Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher current={locale} />
              <button
                onClick={handleLogout}
                className="text-sm text-gray-500 hover:text-red-600 focus:outline-none focus:underline transition-colors"
              >
                Logout
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
            <ul role="list" className="mt-3 flex flex-col gap-3 list-none m-0 p-0">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={`block py-1 ${linkClass(l.href)}`} onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-4">
              <LanguageSwitcher current={locale} />
              <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-red-600 focus:outline-none focus:underline">
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
