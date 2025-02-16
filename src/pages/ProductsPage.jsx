import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ReactLoading from "react-loading";



const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function ProductsPage () {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading ] = useState(false);
  const [isScreenLoading, setIsScreenLoading ] = useState(false);//預設全螢幕loading為關閉狀態

  useEffect(() => {
    const getProducts = async () => {
      setIsScreenLoading(true);//取得API之前開啟全螢幕loading狀態
      try {
        const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/products`);
        setProducts(res.data.products);
      } catch (error) {
        alert("取得產品失敗");
      }finally{
        setIsScreenLoading(false);//取得API之後關閉全螢幕loading狀態
      }
    };
    getProducts();
  }, []);

    //加入購物車
    const addCartItem = async (product_id, qty) => {
      setIsLoading(true);
      try {
        await axios.post(`${BASE_URL}/v2/api/${API_PATH}/cart`, {
          data: {
            product_id,
            qty: Number(qty)
          },
        });
        closeModal();
      } catch (error) {
        alert("加入購物車失敗");
      } finally{
        setIsLoading(false);
      }
    };

  return (
    <>
      <div className="container">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={{ width: "200px" }}>
                  <img
                    className="img-fluid"
                    src={product.imageUrl}
                    alt={product.title}
                  />
                </td>
                <td>{product.title}</td>
                <td>
                  <del className="h6">原價 {product.origin_price} 元</del>
                  <div className="h5 text-danger">特價 {product.price}元</div>
                </td>
                <td>
                  <div className="btn-group btn-group-sm">
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-secondary"
                    >
                      查看更多
                    </Link>
                    <button disabled={isLoading}
                      onClick={() => addCartItem(product.id, 1)}
                      type="button"
                      className="btn btn-danger d-flex align-items-center gap-2"
                    >
                      加到購物車
                      {isLoading && (<ReactLoading type={"spin"} color={"#000"} height={"1.5rem"} width={"1.5rem"} />)}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      { isScreenLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.3)",
          zIndex: 999,}}
        >
          <ReactLoading type="spin" color="black" width="4rem" height="4rem" />
        </div>
      )}
    </>
  )
}