<!--Section: Contact v.2-->
<section class="mb-4" id="Contact">

    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form">

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control">
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control">
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control">
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                <!--Grid row-->

            </form>

            <div class="text-center text-md-left">
                <button><a href="#">Send</a></button>
            </div>
            <div class="status"></div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Address</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>(123) 456 7890</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>mambocoffeesupport@gmail.com</p>
                </li>
            </ul>
        </div>
        <!--Grid column-->

    </div>

</section>
<!--Section: Contact v.2-->

<style>
    section {
        padding:0.5rem 2rem;
    }

    button {
        background-color: white;
        border: 0.1rem solid black;
        transition: all 0.3s ease;
        padding: 0.8rem;
        outline: none;
        margin-top:2rem;
        text-align:center;
        cursor:pointer;
        height:10%;
        width:50%;
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
    
        button {
       height: 10%;
       width: 50%;
      margin-right:auto;
      margin-left: auto;
      
        }
      }
</style>