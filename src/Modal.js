function Header({confirmModal,closeModal}) 
  {
    return(
      <div className="backdrop">
        <div className="modal">
          <h1>Bạn có chắc muốn xóa sản phẩm này không</h1>
          <button type="button" onClick={confirmModal}>Có</button>
          <button type="button" onClick={closeModal}>Không</button>
        </div>
      </div>)
  }
  export default Header