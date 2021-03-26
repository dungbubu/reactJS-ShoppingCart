import { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main'
import Modal from './Modal'
import Footer from './Footer';

const PRODUCTS = 
  [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      descripton: 'Description for product item number 1',
      images: 'https://via.placeholder.com/200x150',
      price: 10.00,
      quantity: 1
    },

    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      descripton: 'Description for product item number 2',
      images: 'https://via.placeholder.com/200x150',
      price: 20.00,
      quantity: 2
    },

    {
      id: 3,
      name: 'PRODUCT ITEM NUMBER 3',
      descripton: 'Description for product item number 3',
      images: 'https://via.placeholder.com/200x150',
      price: 30.00,
      quantity: 3
    },
  ]


const PROMOCODES = 
  [
    {
      id: 1,
      code: "SUMMER",
      discountPercent: 20,
    },
    {
      id: 2,
      code: "SPRING",
      discountPercent: 30,
    },
  ];


// ------------ ------------ ------------ ------------ ------------ ------------ --- ------------ --------------------- ------------
// ------------ ------------ ------------ ------------ ------------ ------------ --- ------------ --------------------- ------------
// ------------ ------------ ------------ ------------ ------------ ------------ --- ------------ --------------------- ------------
// ------------ ------------ ------------ ------------ ------------ ------------ --- ------------ --------------------- ------------


function App() {
  const [products, setProducts] = useState(PRODUCTS)
  const [inputCode, setInputCode] = useState("");
  const [discountPrice, setDiscountPrice] = useState(0)

  const [modals, setModals] = useState(false)
  const [getId, setGetId] = useState(0)
  // const [promotecodes, setPromoteCodes] = useState(PROMOCODES)

  // Khi cần thay đổi giá trị của biến thì dùng biến State
  // React không cho phép thay đổi trực tiếp biến products nên sẽ cần dùng biến setProducts để thay đổi

  // Khai báo state viết dài
  // const state = useState(0);
  // const count = state[0];
  // const setCount = state[1];

  let subTotalPrice = 0;
  let taxPrice = 0;
  let totalPrice = 0;
  let lastPrice = 0;


  function checkCode()
    {
      for (let i=0; i<PROMOCODES.length; i++)
        {
          if (inputCode === PROMOCODES[i].code)
            {
              console.log("true")
              setDiscountPrice(PROMOCODES[i].discountPercent);
              console.log(discountPrice)
            }
          // if (inputCode !== PROMOCODES[i].code)
          //   {
          //     setDiscountPrice(0);
          //   }
        }
    }

  for (let i=0; i<products.length; i++)
    {
      subTotalPrice += (products[i].price * products[i].quantity);
      taxPrice = 10 * subTotalPrice / 100;
      totalPrice = subTotalPrice + taxPrice;
      lastPrice = totalPrice - (totalPrice * discountPrice / 100);
    }

  let totalItems = products.reduce(
    (total, product) => (total += product.quantity),
    0 // Khởi tạo giá trị ban đầu bằng 0
  );


  //TODO: Tính giá tiền (subTotal), thuế (tax = 10%), total = subTotal + tax
  // Chú ý khi hiển thị cần làm tròn về 2 số sau dấu thập phân


  // ------------ ------------ ------------ ------------ ------------ ------------ --- ------------ --------------------- ------------
  // ------------ ------------ ------------ ------------ ------------ ------------ --- ------------ --------------------- ------------
  console.log("Run App");

  // function handleClick1()
  //   {
  //     console.log("Xóa sản phẩm");
  //   }

  // const handleClick2 = function ()
  //   {
  //     return handleClick1
  //   }

  // const handleClick3 = (product) =>
  //   {
  //     console.log("Thông tin sản phẩm", product);
  //   }
  
  function handleClick(productID)  //Đây là hàm xóa phần tử trong mảng
    {
      setGetId(productID.id)
      setModals(true)
    }

  function confirmModal(productID) //Đây là nút Ok
    {
      setProducts(products.filter(product => product.id !== getId ));
      // Viết kiểu khác setProducts( () => products.filter(product => product.id !== productID))

      //Cách khác là khai báo mảng mới const mangMoi = products.filter(product => product.id !== 
      //setProducts(mangMoi);
      setModals(false)
    }
  function closeModal()
    {
      setModals(false)
    }

  function updateQuantity(event, productID) //Event là tham số mặc định luôn tồn tại
    {
      const inputValue = event.target.value; //.target để trỏ tới được input của thằng event, sau đó .value để lấy giá trị của nó

      let mangMoi = [...products];
      let index = mangMoi.findIndex((product) => product.id === productID);

      if (index>-1)
        {
          mangMoi[index].quantity = Number(inputValue)
        }
      setProducts(mangMoi);
      // console.log(event.target.value)
    }


  // ------------ ------------ ------------ ------------ ------------ ------------ --- ------------ --------------------- ------------
  // ------------ ------------ ------------ ------------ ------------ ------------ --- ------------ --------------------- ------------
  const listItems = products.map((product) => //Nhớ dùng biến State ở đấy - products
  (
    <li key={product.id} className="row">

      <div className="col left">
        <div className="thumbnail">
          <a href="/#">
            <img src={product.images} alt={"Ảnh sản phẩm" + product.name} />
          </a>
        </div>
        <div className="detail">
          <div className="name"><a href="/#">{product.name}</a></div>
          <div className="description">
          {product.descripton}
          </div>
          <div className="price">${product.price}</div>
        </div>
      </div>
    
      <div className="col right">
        <div className="quantity">
          <input 
            type="number" 
            className="quantity" 
            step="1" 
            value={product.quantity} 
            onChange={ (event) =>  updateQuantity(event, product.id)}
          />
        </div>
    
        <div className="remove">
          <svg
            version="1.1"
            className="close"
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enableBackground="new 0 0 60 60"
            xmlSpace="preserve"
            // onClick = {handleClick1}
            // onClick = {handleClick2()} //Không dùng vì nó chạy mà không cần bấm nút
            // onClick = {() => handleClick3(product)} // Cách này phổ biến vì có thể truyền tham số vào được
            onClick = {() => handleClick(product)}
          >
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon>
          </svg>
        </div>
      </div>
    </li>
  ));


  // ------------ ------------ ------------ ------------ ------------ ------------ --- ------------ --------------------- ------------
  // ------------ ------------ ------------ ------------ ------------ ------------ --- ------------ --------------------- ------------
  
  // Gán biến theo điều kiện
  // if (products.length === 0) productList = <li>404 not found</li>

  // Return theo điều kiện
  // if (products.length === 0) return <h1>404 not found</h1>
  
  
  return (
    <div className="shoppingCart">

      <Header
        totalItems={totalItems}
      />


      <Main 
        listItems={listItems}
      />

      {modals === true && 
        <Modal 
          confirmModal={confirmModal}
          closeModal={closeModal}
        />}

      
      <Footer 
        inputCode={inputCode}
        setInputCode={setInputCode}
        checkCode={checkCode}
        subTotalPrice={subTotalPrice}
        taxPrice={taxPrice}
        totalPrice={totalPrice}
        discountPrice={discountPrice}
        lastPrice={lastPrice}
      />
    </div>
  );
}

export default App;
