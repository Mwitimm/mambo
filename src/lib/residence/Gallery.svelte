
<div class="card-group">
    <div class="card">
      <img  src="https://i.ibb.co/LvmYSCP/1bedvisit.jpg" alt="1bedvisit"  class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">01</h5>
        <p class="card-text">
            1 bedroom apartment
        </p>
        <button><a href="/onebed">Photo Visit</a></button>
      </div>
      
    </div>
    <div class="card">
      <img src="https://i.ibb.co/pzC6KTX/2bedvisit.jpg" alt="2bedvisit" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">02</h5>
        <p class="card-text">
            2 bedroom apartment
        </p>
        <button><a href="/twobed">Photo Visit</a></button>
      </div>
      
    </div>
    <div class="card">
        <img src="https://i.ibb.co/6FHz5Mg/3bedvisit.jpg" alt="3bedvisit" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">03</h5>
        <p class="card-text">
            3 bedroom apartment
        </p>
        <button><a href="/threebed">Photo Visit</a></button>
      </div>
     
    </div>
  </div>

  <style>
    .card-group{
        margin-bottom:5rem;
    }
    .card{
        place-items:center;
    }
    .card img{
        height:60%;
        width: 100%;
      }
    .card .card-body{
        height:10%;
        width:100%;
        place-items:center;
    } 
    button {
        background-color: white;
        border: 0.1rem solid black;
        transition: all 0.3s ease;
        padding: 1rem;
        outline: none;
        margin-top:2rem;
        text-align:center;
        cursor:pointer;
        height:40%;
      }
      button a{
        color:#666;
        font-size:1.5rem;
        text-decoration:none;
        text-align:center;
      }
      button:hover{
        letter-spacing:0.2rem;
      }

      @media (max-width: 767px) {
        .card img {
          height: auto;
        }
    
        .card .card-body {
          height: auto;
        }
    
        button {
          height: auto;
          padding: 0.5rem;
          font-size: 1rem;
        }
      }

  </style>