import './App.css';
import Header from './components/Header.js';

function App() {
  return (
    <div className="shoppingCart">
      <Header />
      <header></header>

      <hr></hr>

      <main>
        <div className="product dFlex spaceBetween alignItemsCenter">
          <a className="productIMG" href="/#"> </a>
          <div className="productINFO">
            <a className="productName" href="/#">PRODUCT ITEM NUMBER 1</a>
            <p>Description for product item number 1</p>
            <p className="productPrice">$5.99</p>
          </div>
          <div className="quantity"><input type="number" className="quantity" step="1" defaultValue="2"></input></div>
          <a className="remove" href="/#">
            <svg version="1.1"
                 className="close"
                 xmlns="//www.w3.org/2000/svg"
                 xmlnsXlink="//www.w3.org/1999/xlink"
                 x="0px" y="0px" viewBox="0 0 60 60"
                 enableBackground="new 0 0 60 60"
                 xmlSpace="preserve">
                <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon>
            </svg>
          </a>
        </div>

        <hr></hr>

        <div className="product dFlex spaceBetween alignItemsCenter">
          <a className="productIMG" href="/#"> </a>
          <div className="productINFO">
            <a className="productName" href="/#">PRODUCT ITEM NUMBER 2</a>
            <p>Description for product item number 2</p>
            <p className="productPrice">$9.99</p>
          </div>
          <div className="quantity"><input type="number" className="quantity" step="1" defaultValue="1"></input></div>
          <a className="remove" href="/#">
            <svg version="1.1"
                 className="close"
                 xmlns="//www.w3.org/2000/svg"
                 xmlnsXlink="//www.w3.org/1999/xlink"
                 x="0px" y="0px" viewBox="0 0 60 60"
                 enableBackground="new 0 0 60 60"
                 xmlSpace="preserve">
                <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon>
            </svg>
          </a>
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
          <button type="button" href="/#">Check out {'>'}</button>
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
