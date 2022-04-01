function header() {
    return `   <div id="navbar">
    <div id="offers">
    <p><strong>Clear the Rack!</strong> Extra 25% off select red-tag clearance. Prices as marked. Now thru March 27. <a title="Clearance" href="/clearance">Clearance</a></p>
    </div>
    <div id="logo">
      <div class="logo">
        <a href="index.html"><img src="https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg" alt=""></a>
      </div>

      <div class="d-flex">
        <div class="dropdown me-1">
          <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
            Search
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
            <input id="input111" type="search" placeholder="What Can We Help You Find?">
          </ul>
        </div>
        <div class="dropdown me-1">
          <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
            Sign In
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
            <li><a class="dropdown-item" href="signup.html">Sign In</a></li>

            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="login.html">Log out</a></li>
          </ul>
        </div>

      </div>
      <div id="bag">
        <a href="cart.html"><span class="iconify" data-icon="ion:bag-outline" data-width="30" data-height="30"></span></a>
      </div>


    </div>
    <nav class="navbar navbar-expand-lg position-fixed w-100">

      <div id="navbar-categories" class="me-5 ms-1">
        <a class="navbar-categories-li" href="">Clearance</a>
        <a class="navbar-categories-li" href="categorywomen.html">Women</a>
        <a class="navbar-categories-li" href="categorywomen.html">Men</a>
        <a class="navbar-categories-li" href="categorywomen.html">Kids</a>
        <a class="navbar-categories-li" href="">Shose</a>
        <a class="navbar-categories-li" href="">Activewear</a>
        <a class="navbar-categories-li" href="">Bag & Accessories</a>
        <a class="navbar-categories-li" href="">Home</a>
        <a class="navbar-categories-li" href="">Beauty</a>
        <a class="navbar-categories-li" href="">Gifts</a>
        <a class="navbar-categories-li" href="">Flash Events</a>
      </div>

      <div class="navbar-mapping-div hidden fade-in"></div>
      <div class="navbar-studio-div hidden fade-in">
        <img src="./photos/Studio_ss.png" alt="" />
      </div>
      <div class="navbar-profile-div fade-in hidden">

        <div class="hidden" id="loginSpecial">
        </div>
      </div>
    </nav>
    <div id="overlay" class="hidden"></div>


  </div>`
}
export default header