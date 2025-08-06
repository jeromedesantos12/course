## 🟦 1. React Component dengan JSX

### ✅ Penulisan:

```jsx
function Article(props) {
  return (
    // react fragment
    <>
      <div>{props.name}</div>
      <div>{props.hobby}</div>
    </>
  );
}
```

### ✅ Pemanggilan:

```jsx
<Article name="Jeremy" hobby="Coding" />
```

1. Props dikirim sebagai atribut seperti HTML.
2. Komponen wajib ditampilkan dalam JSX render.
3. JSX akan menampilkan output ke browser.
   Bisa mengembalikan elemen React seperti <div>, <p>, dll.

## 🟨 2. Fungsi Biasa di JavaScript

### ✅ Penulisan:

```js
function Article(props) {
  return `${props.name} loves ${props.hobby}`;
}
```

### ✅ Pemanggilan:

```js
const hasil = Article({ name: "Jeremy", hobby: "Coding" });
console.log(hasil); // Jeremy loves Coding
```

1. Props dikirim sebagai objek biasa.
2. Cocok untuk Node.js atau skrip JS murni.
3. Tidak menggunakan JSX; hanya mengembalikan string atau tipe data JS lainnya.
