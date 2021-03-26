function Footer({inputCode,setInputCode,checkCode,subTotalPrice,taxPrice,totalPrice,discountPrice,lastPrice}) 
  {
    return(
      <footer className="container">
        <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input
            type="text"
            id="promo-code"
            value={inputCode}
            onChange={(event) => setInputCode(event.target.value)}
        ></input>
        <button type="button" onClick={checkCode}></button>
        </div>

        <div className="summary">
        <ul>
            <li>Subtotal <span>{subTotalPrice} $</span></li>
            <li>Tax <span>{taxPrice} $</span></li>
            <li className="total">Total <span>{totalPrice} $</span></li>
            <li>Promocode <span>{discountPrice} %</span></li>
            <li className="total">Total <span>{lastPrice} $</span></li>
        </ul>
        </div>

        <div className="checkout">
        <button type="button">Check Out</button>
        </div>
      </footer>)
  }
  export default Footer