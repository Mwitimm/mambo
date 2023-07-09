
<div class="card-group">
    <div class="card">
      <img src="https://i.ibb.co/HqQ9XmX/1bed-apartment.webp" alt="1bed-apartment" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">01</h5>
        <p class="card-text">
            1 bedroom apartment
        </p>
        <button><a href="#">Photo Visit</a></button>
      </div>
      
    </div>
    <div class="card">
      <img src="https://i.ibb.co/12K24ch/2bed-apartment.webp" alt="2bed-apartment" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">02</h5>
        <p class="card-text">
            2 bedroom apartment
        </p>
        <button><a href="#">Photo Visit</a></button>
      </div>
      
    </div>
    <div class="card">
        <img src="https://i.ibb.co/QjXF0t7/3bed-apartment.jpg" alt="3bed-apartment" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">03</h5>
        <p class="card-text">
            3 bedroom apartment
        </p>
        <button><a href="#">Photo Visit</a></button>
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
        height:500px;
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