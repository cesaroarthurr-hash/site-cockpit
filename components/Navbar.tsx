"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "@/lib/content";
import Logo from "./ui/Logo";
import DemoButton from "./ui/DemoButton";
import Icon from "./ui/Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div
        className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled || openMenu
            ? "bg-white/90 shadow-lg shadow-gray-900/5 backdrop-blur-xl ring-1 ring-gray-900/5"
            : "bg-white/70 backdrop-blur-md ring-1 ring-white/40"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.menus.map((menu) => (
              <button
                key={menu.label}
                onMouseEnter={() => setOpenMenu(menu.label)}
                onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  openMenu === menu.label
                    ? "bg-[#8DC63F]/10 text-[#5a8a1f]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {menu.label}
                <Icon
                  name="arrow"
                  className={`h-3.5 w-3.5 rotate-90 transition-transform ${
                    openMenu === menu.label ? "-rotate-90" : ""
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <span className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600">
              🇫🇷 FR
            </span>
            <DemoButton withArrow>{nav.cta}</DemoButton>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label="Menu"
          >
            <div className="flex h-4 w-5 flex-col justify-between">
              <span className={`block h-0.5 bg-gray-800 transition-all ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-0.5 bg-gray-800 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-gray-800 transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mega menu (desktop) */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="hidden overflow-hidden border-t border-gray-100 px-6 pb-6 pt-5 lg:block"
            >
              {nav.menus
                .filter((m) => m.label === openMenu)
                .map((menu) => (
                  <div
                    key={menu.label}
                    className="grid gap-6"
                    style={{ gridTemplateColumns: `repeat(${menu.columns.length}, minmax(0,1fr))` }}
                  >
                    {menu.columns.map((col) => (
                      <div key={col.title}>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#8DC63F]">
                          {col.title}
                        </p>
                        <ul className="space-y-1">
                          {col.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                onClick={() => setOpenMenu(null)}
                                className="group block rounded-xl px-3 py-2 transition-colors hover:bg-[#8DC63F]/[0.07]"
                              >
                                <span className="block text-sm font-semibold text-gray-800 group-hover:text-[#5a8a1f]">
                                  {link.label}
                                </span>
                                {link.desc && (
                                  <span className="block text-xs text-gray-400">{link.desc}</span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl bg-white p-3 shadow-xl ring-1 ring-gray-900/5 lg:hidden"
          >
            {nav.menus.map((menu) => (
              <div key={menu.label} className="border-b border-gray-50 last:border-0">
                <button
                  onClick={() => setMobileSub(mobileSub === menu.label ? null : menu.label)}
                  className="flex w-full items-center justify-between px-3 py-3 text-sm font-semibold text-gray-800"
                >
                  {menu.label}
                  <Icon name="arrow" className={`h-4 w-4 rotate-90 transition-transform ${mobileSub === menu.label ? "-rotate-90" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileSub === menu.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-0.5 pb-2">
                        {menu.columns.flatMap((c) => c.links).map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-5 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="px-3 pt-3">
              <DemoButton withArrow className="w-full">
                {nav.cta}
              </DemoButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
