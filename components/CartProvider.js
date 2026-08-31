"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProduct } from "@/lib/data";

const Ctx = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [toast, setToast] = useState("");

  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem("fs_cart") || "[]")); } catch {}
  }, []);
  useEffect(() => { localStorage.setItem("fs_cart", JSON.stringify(items)); }, [items]);

  const api = useMemo(() => ({
    items,
    count: items.reduce((a, i) => a + i.qty, 0),
    add(id, qty = 1) {
      setItems((prev) => {
        const f = prev.find((x) => x.id === id);
        return f ? prev.map((x) => x.id === id ? { ...x, qty: x.qty + qty } : x) : [...prev, { id, qty }];
      });
      const p = getProduct(id);
      setToast(`${p?.sku || "Item"} added to cart`);
      setTimeout(() => setToast(""), 2200);
    },
    setQty(id, qty) {
      setItems((prev) => prev.map((x) => x.id === id ? { ...x, qty: Math.max(1, qty) } : x));
    },
    remove(id) { setItems((prev) => prev.filter((x) => x.id !== id)); },
    clear() { setItems([]); },
  }), [items]);

  return (
    <Ctx.Provider value={api}>
      {children}
      {toast && <div className="toast">{toast}</div>}
    </Ctx.Provider>
  );
}
export const useCart = () => useContext(Ctx);
