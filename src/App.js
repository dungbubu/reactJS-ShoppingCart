import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="shoppingCart">
      <header>
        <h1>Shopping Cart</h1>
        <span className="dFlex spaceBetween">
          <p>Home {'>'} Shopping Cart</p>
          <p>3 items in the bag</p>
        </span>
      </header>

      <hr></hr>

      <main>
        <div className="product dFlex spaceBetween alignItemsCenter">
          <a className="productIMG"></a>
          <div className="productINFO">
            <a className="productName">PRODUCT ITEM NUMBER 1</a>
            <p>Description for product item number 1</p>
            <p className="productPrice">$5.99</p>
          </div>
          <div className="quantity"><input type="number" className="quantity" step="1" value="2"></input></div>
          <a className="remove" href="#">x</a>
        </div>

        <hr></hr>

        <div className="product dFlex spaceBetween alignItemsCenter">
          <a className="productIMG"></a>
          <div className="productINFO">
            <a className="productName">PRODUCT ITEM NUMBER 2</a>
            <p>Description for product item number 2</p>
            <p className="productPrice">$9.99</p>
          </div>
          <div className="quantity"><input type="number" className="quantity" step="1" value="1"></input></div>
          <a className="remove" href="#">x</a>
        </div>

        <hr></hr>
      </main>

      <footer>
        <div className="dFlex spaceBetween">
          <div className="promotion">
            <p>Have A Promo Code?</p>
            <div className="promotionCode">
              <input type="text"></input>
              <button type="button">{'>'}</button>
            </div>
          </div>

          <div className="summary">
            <ul>
              <li>
                Subtotal
                <span className="priceTag">$21.97</span>
              </li>
              <li>
                Tax
                <span className="priceTag">$5.00</span>
              </li>
              <li className="total">
                Total
                <span className="priceTag">$26.97</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="checkOut">
          <button type="button" href="#">Check out {'>'}</button>
        </div>
      </footer>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
