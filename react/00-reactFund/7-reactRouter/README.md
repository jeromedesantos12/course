# React Router v6.4+ — Data Routers & RouterProvider

## 🚀 Konsep Dasar

React Router v6.4 memperkenalkan **Data Routers** yang memungkinkan:

- Loader & action untuk prefetching data dan handling form submissions
- Error boundaries per route
- Nested routing dengan layout routes

`RouterProvider` digunakan untuk menyuntikkan router yang sudah dikonfigurasi ke dalam aplikasi.

---

## ⚙️ Setup

### 1. Konfigurasi Router

```js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // layout utama
    errorElement: <RootError />, // fallback error root
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      {
        path: 'profile/:id',
        loader: async ({ params }) => {
          const res = await fetch(`/api/profile/${params.id}`);
          return res.json();
        },
        element: <ProfilePage />, // halaman profile
        errorElement: <ProfileError />, // fallback error profile
      },
    ],
  },
]);
```

### 2. Bungkus Aplikasi dengan RouterProvider

```js
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
```

---

## 🧩 Fitur Powerful

### 1. Loader & Action

- **Loader**: Prefetch data sebelum render, mirip Next.js `getServerSideProps`.
- **Action**: Handle form submission & mutasi data.

#### Loader Example

```js
{
  path: 'profile/:id',
  loader: async ({ params }) => {
    const res = await fetch(`/api/profile/${params.id}`);
    return res.json();
  },
  element: <ProfilePage />,
}
```

Di komponen:

```js
import { useLoaderData } from 'react-router-dom';

const ProfilePage = () => {
  const profile = useLoaderData();
  return <div>{profile.name}</div>;
};
```

#### Action Example

```js
import { redirect } from 'react-router-dom';

{
  path: 'contact',
  action: async ({ request }) => {
    const formData = await request.formData();
    await sendMessage(formData);
    return redirect('/thank-you');
  },
  element: <ContactPage />,
}
```

Form:

```js
import { Form } from 'react-router-dom';

<Form method="post">
  <input name="message" />
  <button type="submit">Send</button>
</Form>
```

---

### 2. Error Boundaries per Route

Setiap route bisa punya `errorElement` untuk fallback UI modular.

```js
{
  path: 'dashboard',
  loader: async () => {
    throw new Error('Failed to load dashboard');
  },
  element: <DashboardPage />, // halaman dashboard
  errorElement: <DashboardError />, // fallback error dashboard
}
```

---

### 3. Nested Routing & Layout Routes

Layout routes memungkinkan UI konsisten (navbar, sidebar) dengan konten dinamis.

```js
{
  path: '/',
  element: <MainLayout />, // layout utama
  children: [
    { index: true, element: <HomePage /> },
    { path: 'about', element: <AboutPage /> },
    { path: 'settings', element: <SettingsPage /> },
  ],
}
```

Di layout:

```js
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);
```

---

## 🔧 Integrasi Lanjutan

### 1. Loader + Jotai `atomWithQuery`

Sinkronisasi data loader ke global state dengan Jotai.

```js
// atom.ts
import { atomWithQuery } from 'jotai-tanstack-query';

export const profileAtom = atomWithQuery((get) => ({
  queryKey: ['profile', get(userIdAtom)],
  queryFn: async () => {
    const id = get(userIdAtom);
    const res = await fetch(`/api/profile/${id}`);
    return res.json();
  },
}));
```

Loader:

```js
{
  path: 'profile/:id',
  loader: async ({ params }) => ({ id: params.id }),
  element: <ProfilePage />,
}
```

Di komponen:

```js
import { useAtomValue } from 'jotai';

const profile = useAtomValue(profileAtom);
```

---

### 2. Action + Redirect

Pisahkan logic mutasi dan navigasi dari UI.

```js
{
  path: 'contact',
  action: async ({ request }) => {
    const formData = await request.formData();
    await sendMessage(formData);
    return redirect('/thank-you');
  },
  element: <ContactPage />,
}
```

---

### 3. Modular Error Boundaries

Setiap route punya fallback UI sendiri.

```js
{
  path: 'dashboard',
  loader: async () => {
    const res = await fetch('/api/dashboard');
    if (!res.ok) throw new Error('Dashboard failed');
    return res.json();
  },
  element: <DashboardPage />, // halaman dashboard
  errorElement: <DashboardError />, // fallback error dashboard
}
```

---

## 🧩 Kombinasi Modular

Struktur modular:

```js
{
  path: '/',
  element: <MainLayout />, // layout utama
  children: [
    {
      path: 'profile/:id',
      loader: profileLoader,
      action: profileAction,
      element: <ProfilePage />,
      errorElement: <ProfileError />, // fallback error profile
    },
    {
      path: 'settings',
      loader: settingsLoader,
      element: <SettingsPage />,
      errorElement: <SettingsError />, // fallback error settings
    },
  ],
}
```

- Loader → sync ke Jotai
- Action → handle mutasi + redirect
- ErrorElement → fallback UI modular

---

## ✅ Benefit

- Arsitektur terstruktur, scalable, dan maintainable
- Prefetch data, error handling, dan form submission lebih modular
- Cocok untuk SPA, SSR, microfrontend, dan lazy-loaded routes

---

**Referensi:**  
- [React Router Docs](https://reactrouter.com/en/main)
- [Jotai Docs](https://jotai.org/)
- [TanStack Query](https://tanstack.com/query/latest)

---

README ini siap digunakan untuk dokumentasi proyek React Router v6.4+ dengan arsitektur modular dan best practice modern.
