# 🚀 Nama Proyek Kamu

Proyek React modern menggunakan [Vite](https://vitejs.dev/) untuk build yang super cepat, dengan state management modular via [Jotai](https://jotai.org/) dan data fetching efisien via [React Query](https://tanstack.com/query).

## 📦 Tech Stack
- ⚛️ React 18+
- ⚡ Vite
- 🌱 Jotai (state management)
- 🔍 React Query (server state & caching)
- 🎨 Tailwind CSS (opsional styling)
- 🧪 Vitest + Testing Library (opsional testing)

## 🚀 Instalasi
```bash
# Inisialisasi proyek (jika belum)
npx create-vite@latest nama-proyek-kamu --template react
# Masuk ke folder proyek
cd nama-proyek-kamu
# Install dependencies
npm install
```

## 🧑‍💻 Development

```bash
npm run dev
```

Akses di `http://localhost:5173`

## 🗂️ Struktur Folder (Modular)

```
src/
├── atoms/           # Jotai atoms (global state)
├── components/      # Reusable UI components
├── hooks/           # Custom hooks (e.g. useQuery wrappers)
├─��� pages/           # Page-level components
├── services/        # API calls & React Query configs
├── styles/          # Global styles (optional)
├── App.jsx
└── main.jsx
```

## ✅ Scripts

| Command           | Deskripsi                        |
|-------------------|----------------------------------|
| npm run dev       | Menjalankan server dev           |
| npm run build     | Build untuk production           |
| npm run preview   | Preview hasil build              |
| npm test          | Menjalankan test (jika setup)    |
