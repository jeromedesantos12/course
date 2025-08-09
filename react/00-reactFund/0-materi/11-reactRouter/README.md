# React Router Setup Guide

React Router adalah library standar untuk routing di aplikasi React. Dengan React Router, kamu bisa membuat navigasi antar halaman (route) di aplikasi single-page (SPA) dengan mudah.

## Cara Setting React Router

Berikut beberapa cara umum untuk mengatur routing di React:

### 1. Static Routing (Manual di Komponen)

Cocok untuk aplikasi kecil/sederhana.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 2. Nested Routing

Untuk aplikasi dengan layout bertingkat (nested layout).

```jsx
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
</Routes>
```

### 3. Route Configuration (Object-based Routing)

Direkomendasikan untuk aplikasi modern (React Router v6.4+). Mendukung fitur loader, error boundary, dan nested layout.

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
```

### 4. HashRouter

Untuk aplikasi yang di-deploy di static hosting tanpa server-side routing.

```jsx
import { HashRouter, Routes, Route } from "react-router-dom";

<HashRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</HashRouter>;
```

## Rekomendasi

**Untuk aplikasi React modern, sangat direkomendasikan menggunakan Route Configuration (object-based routing) dengan `createBrowserRouter` dan `RouterProvider`.**

### Alasan Rekomendasi:

- Lebih scalable dan maintainable untuk aplikasi besar
- Mendukung fitur loader, action, error boundary, dan nested layout
- Struktur routing lebih jelas dan mudah diatur
- Lebih mudah untuk testing dan pengembangan fitur lanjutan

Jika aplikasi kamu masih sederhana, static routing juga masih bisa digunakan. Namun, untuk aplikasi yang akan berkembang, sebaiknya langsung gunakan route configuration.

---

Referensi:

- [React Router Documentation](https://reactrouter.com/en/main)
