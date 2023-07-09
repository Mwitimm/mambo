<script>

</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="https://i.ibb.co/Qj8QBz6/Logo.webp" alt="Logo" width="20%" height="15%">
        <h5>Mambo Residence</h5>
    </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 custom-nav">
          <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="#Hero">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#Lists" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Book Now
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/onebed">1 Bedroom</a></li>
              <li><a class="dropdown-item" href="/twobed">2 Bedroom</a></li>
              <li><a class="dropdown-item" href="/threebed">3 Bedroom</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#Lists">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#Contact">Contact Us</a>
          </li>
        </ul>
        <div class="avatar">
           
        </div>
      </div>
    </div>
  </nav>

  <style>
    nav{
      position:fixed;
      width: 100%;
      z-index: 10;
    }
    .navbar-brand{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    .custom-nav {
        background-color: black;
        border-radius: 10px;
        padding: 1rem;
         display: flex;
        justify-content: center;
        display: flex;
        justify-content: space-evenly;
      }
nav .navbar-brand img{
    transition: all 1s ease;
    background-color: white;
    outline: none;

}
nav .navbar-brand img:hover{
    rotate: 360deg;
}
.custom-nav li{
    margin:0 1.5rem;
}
.custom-nav li a{
    font-size: 1rem;
    cursor:pointer;
    transition: all 0.3s ease;
}
.custom-nav li a:hover{
    border-bottom:1px solid #666;
    padding: 0;
    margin:0;
    font-size: 1.5rem;
}
/* Media queries for small screens */
@media (max-width: 767px) {
nav{
    max-height: 12vh;
    padding: 0;
    margin: 0;
    align-items: center;

}
  nav .navbar-brand h5{
    display: none;
  }
  nav .navbar-brand img{
    height: 25%;
    width: 50%;
    background-color: white;
  }
.container-fluid .navbar-toggler{
    height: 55px;
    width: 60px;
    margin:2rem 5rem;
    padding: 0.5rem 1rem;
    align-items: center;
  }
 


  }
  </style>

