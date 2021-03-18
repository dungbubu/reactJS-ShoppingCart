function Header() {
  return (
      <header>
        <h1>Shopping Cart</h1>
        <span className="dFlex spaceBetween">
          <p>Home {'>'} Shopping Cart</p>
          <p>3 items in the bag</p>
        </span>
      </header>
  );
}

export default Header;
