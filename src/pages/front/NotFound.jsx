import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function NotFound() {
  const [count, setCount] = useState(5);//倒數5秒
  const navigate = useNavigate();

  useEffect (() => {
    if(count === 0){
      navigate("/");//倒數結束後導向首頁
      return;
    }

    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1)
    },1000);//每 1 秒鐘減 1
  
    return () => clearTimeout(timer); // 清除計時器，避免記憶體洩漏(記憶體佔用越來越高,導致程式爆掉)


  },[count, navigate]);

  return(
    <div>
      <h1>您所搜尋的頁面不存在</h1>
      <h2>將於{count}秒後自動導頁至首頁</h2>
      <p>或者您可直接點即按鈕立即回到首頁</p>
      <button type="button" className="btn btn-primary" onClick={() =>{navigate("/")}} >回到首頁</button>
    </div>
    
  )
  
}