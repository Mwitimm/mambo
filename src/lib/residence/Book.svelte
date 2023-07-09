<script>
    const  threebed = {
        price:35_583,
        status:true
    };
const onBook = () => {
    if(threebed.status){
        threebed.status = false
        alert("Booked")
    
    }
else{
    alert("House is already Booked")
}
   
}
let checkInDate = null;
let checkOutDate = null;



</script>

	<div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="booking-form">
						<div class="booking-bg">
							<div class="form-header">
								<h2>Make your reservation</h2>
								<p>
                                    Unwind in Style: Reserve Your Spot in our Furnished 3-Bedroom Apartment Today!!! Located near JKIA Airport
                                </p>
                                <p>
                                    KES {threebed.price} /day
                                </p>
                                <div class="status">
                                    {#if threebed.status }
                                     status: <span class="available">Available</span>
                                     {:else}
                                     status: <span class="booked">Occupied</span>
                                    {/if}
                                   
                                </div>
							</div>
						</div>
						<form on:submit={onBook}>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Check In</span>
										<input class="form-control" type="date" required  bind:value={checkInDate}>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Check Out</span>
										<input class="form-control" type="date" required bind:value={checkOutDate}>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Adults</span>
										<select class="form-control">
											<option>1</option>
											<option>2</option>
											<option>3</option>
										</select>
										<span class="select-arrow"></span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Children</span>
										<select class="form-control">
											<option>0</option>
											<option>1</option>
											<option>2</option>
										</select>
										<span class="select-arrow"></span>
									</div>
								</div>
							</div>
							<div class="form-btn">
								<button class="submit-btn" type="submit">Book</button>
							</div>
                            <small>
                                By Clicking the book button you agree with our rules and terms of service
                            </small>
						</form>

					</div>
				</div>
			</div>
		</div>
	</div>


<style>

    .status span{
        font-size:2rem;
        padding:0.5rem 0.8rem;

    }
    .status .available{
        background-color:green;
        color:white;
        border-radius:0.5rem;
    }
    .status .booked{
        background-color:red;
        color:white;
        border-radius:0.5rem;
    }
    .section {
        position: relative;
        height: 100vh;
    }
    
    .section .section-center {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    
    #booking {
        font-family: 'Alice', serif;
       /* background: rgba(133, 104, 73, 0.33);*/
    }
    
    .booking-form {
        position: relative;
        max-width: 100%;
        width: 100%;
        margin: auto;
        background: #fff;
        border-radius: 6px;
        -webkit-box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.1);
    }
    
    .booking-form .booking-bg {
        position: absolute;
        left: 0px;
        top: -1px;
        bottom: 0px;
        width: 450px;
        background-size: cover;
        background-position: center;
        padding: 15px;
        border-radius: 6px;
        -webkit-box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }
    
    .booking-form .booking-bg::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: rgba(133, 104, 73, 0.78);
    }
    
    .booking-form>form {
        margin-left: 425px;
        padding: 30px;
    }
    
    .booking-form .form-header {
        margin-bottom: 5px;
        margin-top: 10px;
        position: relative;
        z-index: 20;
    }
    
    .booking-form .form-header h2 {
        font-family: 'Playfair Display', serif;
        margin-top: 0;
        margin-bottom: 15px;
        font-weight: 900;
        color: #fff;
        font-size:30px;
        text-transform: capitalize;
    }
    
    .booking-form .form-header p {
        color: #fff;
        font-size: 18px;
    }
    
    .booking-form .form-group {
        position: relative;
        margin-bottom: 20px;
    }
    
    .booking-form .form-control {
        background-color: #fff;
        height: 45px;
        padding: 0px 15px;
        color: #151515;
        border: 1px solid #e5e5e5;
        font-size: 16px;
        font-weight: 700;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-radius: 40px;
        -webkit-transition: 0.2s all;
        transition: 0.2s all;
    }
    
    .booking-form .form-control::-webkit-input-placeholder {
        color: #e5e5e5;
    }
    
    .booking-form .form-control:-ms-input-placeholder {
        color: #e5e5e5;
    }
    
    .booking-form .form-control::placeholder {
        color: #e5e5e5;
    }
    
    .booking-form .form-control:focus {
        background: #f8f8f8;
    }
    
    .booking-form input[type="date"].form-control:invalid {
        color: #e5e5e5;
    }
    
    .booking-form select.form-control {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    
    .booking-form select.form-control:invalid {
        color: #e5e5e5;
    }
    
    .booking-form select.form-control option {
        color: #151515;
    }
    
    .booking-form select.form-control+.select-arrow {
        position: absolute;
        right: 3px;
        bottom: 5px;
        width: 32px;
        line-height: 32px;
        height: 32px;
        text-align: center;
        pointer-events: none;
        color: #e5e5e5;
        font-size: 14px;
    }
    
    .booking-form select.form-control+.select-arrow:after {
        content: '\279C';
        display: block;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    
    .booking-form .form-label {
        color: #856849;
        text-transform: uppercase;
        line-height: 24px;
        height: 24px;
        font-size: 14px;
        font-weight: 400;
        margin-left: 20px;
    }
    
    .booking-form .form-btn {
        margin-top: 30px;
    }
    
    .booking-form .submit-btn {
        display: block;
        width:50%;
        color: #fff;
        background-color: rgba(133, 104, 73, 0.9);
        font-weight: 700;
        font-size: 18px;
        border: none;
        border-radius: 40px;
        height: 55px;
        -webkit-transition: 0.2s all;
        transition: 0.2s all;
    }
    
    .booking-form .submit-btn:hover,
    .booking-form .submit-btn:focus {
        background-color: rgba(133, 104, 73, 1);
    }
    
    @media only screen and (max-width: 768px) {
        .booking-form .booking-bg {
            position: relative;
            left: 0;
            right: 0;
            bottom: 0;
            top: -15px;
            width: 100%;
            margin: auto;
        }
        .booking-form>form {
            margin-left: 0px;
        }
    }
</style>
