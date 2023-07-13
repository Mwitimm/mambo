



<!-- Gallery -->
<!--<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src= "https://i.ibb.co/xYkMqXT/452261889.jpg" alt="452261889"
      class="w-100 shadow-1-strong rounded mb-4"
    />

    <img
    src="https://i.ibb.co/bPcpyHV/452261807.jpg" alt="452261807"
      class="w-100 shadow-1-strong rounded mb-4"
     
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
    src="https://i.ibb.co/Zgcs375/452261875.jpg" alt="452261875"
      class="w-100 shadow-1-strong rounded mb-4"
    />

    <img
    src="https://i.ibb.co/ydrvRYq/452261860.jpg" alt="452261860"
      class="w-100 shadow-1-strong rounded mb-4"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
    src="https://i.ibb.co/r6qwD0v/452708882.jpg" alt="452708882" 
      class="w-100 shadow-1-strong rounded mb-4"
    />

    <img
    src="https://i.ibb.co/9GSmFwb/453003135.jpg" alt="453003135"
      class="w-100 shadow-1-strong rounded mb-4"
    />
    <div class="image-overlay">
     
     <button class="button" data-bs-toggle="modal" data-bs-target="#showMore">See More</button>
    </div>
    
  
    
  </div>
</div>-->
<!-- Gallery -->
<section id="grid">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-5">
        <img
        src="https://i.ibb.co/bPcpyHV/452261807.jpg" alt="452261807"
          class="w-100 shadow-1-strong rounded mb-4"
         
        />
        
     </div>
     <div class="col-md-7">
      <div class="row">
        <div class="col-md-6">
          <img
          src= "https://i.ibb.co/xYkMqXT/452261889.jpg" alt="452261889"
          class="w-100 shadow-1-strong rounded mb-4"
        />
    
        </div>
      <div class="col-md-6">
        <img
        src="https://i.ibb.co/Zgcs375/452261875.jpg" alt="452261875"
          class="w-100 shadow-1-strong rounded mb-4"
        />
      </div>
     </div>
     <div class="row">
      <div class="col-md-4">
        <img
        src="https://i.ibb.co/Zgcs375/452261875.jpg" alt="452261875"
          class="w-100 shadow-1-strong rounded mb-4"
        />
      </div>
      <div class="col-md-4">
        <img
    src="https://i.ibb.co/ydrvRYq/452261860.jpg" alt="452261860"
      class="w-100 shadow-1-strong rounded mb-4"
    />

      </div>
      <div class="col-md-4">
        <img
        src="https://i.ibb.co/9GSmFwb/453003135.jpg" alt="453003135"
          class="w-100 shadow-1-strong rounded mb-4"
        />
      </div>
     </div>
     <div class="image-overlay">
     
      <button class="button" data-bs-toggle="modal" data-bs-target="#showMore">See More</button>
     </div>
     
     </div>

    </div>
  </div>
</section>
<!-- Modal -->
<div class="modal fade" id="showMore" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="d-block w-100" alt="Wild Landscape"/>
            </div>
            <div class="carousel-item">
              <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block w-100" alt="Camera"/>
            </div>
            <div class="carousel-item">
              <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100" alt="Exotic Fruits"/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

         

      
      
        
        
        
      </div>
    
    </div>
  </div>
</div>





<style>
section{
  padding: 0;
}
#grid{
  margin: 0;
  padding: 0;
}  
#grid  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
 }
 .image-overlay .button {
      color: black;
      background-color: white;
      border: 0.1rem solid black;
      transition: all 0.3s ease;
      padding: 0.8rem;
      outline: none;
      text-align:center;
      cursor:pointer;
      height: 4rem;
      width: 12rem;
      margin-bottom: 3rem;
      cursor: pointer;
      
    }
    .button:hover{
      letter-spacing:0.2rem;
      background-color: black;
      color: white;
    }

    @media (max-width: 768px) {
      #grid .col-md-5,
      #grid .col-md-7 {
        flex-basis: 100%;
        max-width: 100%;
      }

    }
    .image-overlay .button{
      margin-bottom: 5rem;
      text-align: center;
    }

</style>