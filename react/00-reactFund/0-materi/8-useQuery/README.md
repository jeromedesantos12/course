# 📘 Perbandingan Fetch Data API: `useEffect` vs `useQuery`

README ini membahas dua pendekatan populer dalam React untuk mengambil data dari API: menggunakan `useEffect` (native React) dan `useQuery` dari React Query.

---

## ⚙️ Instalasi

### 1. `useEffect` (Native React)

Tidak perlu instalasi tambahan. Sudah tersedia secara default.

### 2. `useQuery` (React Query)

```bash
npm install @tanstack/react-query
```

Tambahkan `QueryClientProvider` di root aplikasi:

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* ...rest of your app */}
    </QueryClientProvider>
  );
}
```

---

## 🧪 Contoh Penggunaan

### ✅ `useEffect`

```jsx
import { useEffect, useState } from "react";

function Example() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

### ✅ `useQuery`

```jsx
import { useQuery } from "@tanstack/react-query";

function Example() {
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch("https://api.example.com/data").then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

---

## ⚖️ Perbandingan

| Aspek               | `useEffect`                | `useQuery` (React Query)            |
| ------------------- | -------------------------- | ----------------------------------- |
| 🔧 Setup            | Native, tidak perlu instal | Perlu instalasi & konfigurasi       |
| 🔁 Refetch otomatis | Manual                     | Otomatis & bisa dikustomisasi       |
| 📦 Caching          | Tidak ada                  | Ada caching bawaan                  |
| 🔄 Retry on failure | Manual                     | Otomatis dengan konfigurasi         |
| 🧹 Cleanup          | Harus manual               | Ditangani oleh React Query          |
| 📊 Devtools         | Tidak tersedia             | Tersedia via `react-query-devtools` |
| 🧠 Learning curve   | Mudah                      | Sedikit lebih kompleks              |

---

## ✅ Kelebihan & Kekurangan

### `useEffect`

**Kelebihan:**

- Native dan ringan
- Kontrol penuh terhadap lifecycle

**Kekurangan:**

- Tidak ada caching
- Harus handle loading, error, dan cleanup manual
- Tidak efisien untuk data yang sering digunakan ulang

### `useQuery`

**Kelebihan:**

- Caching otomatis
- Refetch dan retry bawaan
- Devtools untuk debugging
- Cocok untuk aplikasi skala menengah-besar

**Kekurangan:**

- Perlu instalasi dan setup awal
- Learning curve lebih tinggi
