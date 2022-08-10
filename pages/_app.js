// import "../styles/global.css";

// 全ページ共通のcssを適用できる
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
