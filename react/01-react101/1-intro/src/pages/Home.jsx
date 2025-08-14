import { useEffect, useState } from "react";

// kelebihan dari react dibandingkan dom:
// - tanpa harus perlu tahu domnya bagaimana
// - tanpa harus menyediakan variabel yang bisa mengikat nilai dinamis seperti useState
// - bagaimana cara suatu function dijalankan pertama kali menggunakan useEffect
// - sintaks lebih ringkas dari js vanilla

function Home() {
  const [quote, setQuote] = useState([]); // nilainya langsung masuk ke sini (baik dari useEffect maupun button onClick)
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/quotes/random"); // kita melakukan req ke server
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Failed to fetch quote:", err);
      setQuote({ quote: "Oops, something went wrong.", author: "System" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuote(); // nilainya dimunculkan ketika pertama kali render
  }, []);

  return (
    <>
      <h1>{quote.quote}</h1>
      <h2>{quote.author}</h2>
      <button onClick={getQuote} disabled={loading}>
        {" "}
        {loading ? "Loading..." : "Generate"}
      </button>
    </>
  );
}

export default Home;
