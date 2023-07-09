<script>
    let logo_img = "%sveltekit.assets%/images/Logo.webp";
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="https://i.ibb.co/Qj8QBz6/Logo.webp" alt="Logo" width="20%" height="15%">
        Mambo Residence
      </a>
        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll custom-nav">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarScroll">
        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll custom-nav">
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
            <a class="nav-link text-white">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  
  

  <style>
    nav{
        position:fixed;
        width: 100%;
        z-index: 10;
        background-color:white;
    }

    .custom-nav {
        background-color: black;
        border-radius: 10px;
        padding: 1rem;
      }
      
      .nav-link {
        color: white;
      }
      
      .dropdown-menu .dropdown-item {
        color: black;
      }
      
  </style>