import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' //Appコンポーネントをインポート

createRoot(document.getElementById('root')).render(

  // document.getElementById('root') → HTML内の<div id="root"></div>を取得
  // document.getElementById('id名') →特定idのdivの中身を取得する
  // createRoot　→ Reactの仮想DOMと結び付けるルートを作成
  // .render → Reactコンポーネント（App）をDOMに描画

  <StrictMode>
    <App />
  </StrictMode>,
)
