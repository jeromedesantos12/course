# 🧪 atomWithQuery vs useQuery – README Sederhana

## 📦 Instalasi

```bash
npm install jotai jotai-query-toolkit react-query
```

Pastikan juga sudah setup `QueryClientProvider` dari React Query di root aplikasi:

```js
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  {/* ... */}
</QueryClientProvider>
```

---

## ⚛️ Apa itu `atomWithQuery`?

`atomWithQuery` adalah utilitas dari Jotai yang mengintegrasikan React Query ke dalam atom state. Ini memungkinkan data async (seperti fetch API) langsung dikelola sebagai atom, sehingga bisa digunakan dengan `useAtom`.

---

## 🧪 Contoh Penggunaan

```js
import { atomWithQuery } from 'jotai-query-toolkit';
import { useAtom } from 'jotai';

const userAtom = atomWithQuery(() => ({
  queryKey: ['user'],
  queryFn: async () => {
    const res = await fetch('/api/user');
    return res.json();
  },
}));

function UserComponent() {
  const [user] = useAtom(userAtom);
  return <div>{user.name}</div>;
}
```

---

## 🔍 Perbandingan dengan `useQuery`

| Fitur            | `atomWithQuery` (Jotai)         | `useQuery` (React Query)                |
|------------------|---------------------------------|-----------------------------------------|
| State Management | Terintegrasi langsung dengan atom| Harus dikelola terpisah dari global state|
| Reusability      | Atom bisa dipakai lintas komponen| Harus share queryKey atau context        |
| Composition      | Mudah digabung dengan atom lain  | Perlu ekstra effort untuk komposisi kompleks|
| Simplicity       | Lebih clean untuk state-driven UI| Lebih verbose untuk integrasi dengan state|

---

## ✅ Kapan Pakai `atomWithQuery`?

Gunakan `atomWithQuery` jika:
- Kamu sudah pakai Jotai untuk state management
- Ingin menyatukan async data dan state dalam satu sistem
- Butuh komposisi atom yang fleksibel

Gunakan `useQuery` jika:
- Kamu hanya butuh data fetching tanpa state management tambahan
- Aplikasi kecil atau tidak pakai Jotai
