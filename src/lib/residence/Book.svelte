<script>
import { onMount, onDestroy } from 'svelte';
import { writable, get } from 'svelte/store';
import {goto} from "$app/navigation"

import mambo_residences from "./Houses.js"
import customerDetails  from "./Details.js"


let houses = [];
let customer_details = {}

const getDetails = customerDetails.subscribe((data)=>{
  customer_details = data
})


const unsubscribe = mambo_residences.subscribe(data => {
  houses = data;
  console.log(houses)
});

onDestroy(() => {
  unsubscribe();
  getDetails();
});



const Book = () => {
  const selectedHouse = houses.find(house => house.type === customer_details.houseType);

  if (selectedHouse) {
    if (selectedHouse.isBooked) {
      alert('House is already booked.');
    } else {
      selectedHouse.isBooked = true;
      console.log(selectedHouse);

      alert('House has been booked successfully.');
      console.log(customerDetails)
      goto('/pay');

      // Update the store with the modified house object
     
    }
  } else {
    alert('Invalid house type.');
  }
};
  






</script>

<section>
  
</section>





<section class="house-cards">
  {#each houses as house}
    <div class="card">
      <img src={house.image} alt={house.type} />
      <div class="card-details">
        <h3>{house.type}</h3>
        <p>Price: KES {house.price}/day</p>
        {#if house.isBooked}
          <div class="status occupied">
            Occupied
          </div>
        {:else}
          <div class="status available">
            Available
          </div>
        {/if}
      </div>
    </div>
  {/each}
</section>



<div id="booking" class="section">
  <div class="section-center">
      <div class="container">
          <div class="row">
              <div class="booking-form">
                  <div class="booking-bg">
                      <div class="form-header">
                          <h2>Good To Know</h2>
                          <p>
                            Mambo Coffee Residences, 3Bdrm Aprt, All Ensuite, Close to JKI Airport with Free Trnsfr is a sustainable apartment in Nairobi, where guests can make the most of its outdoor swimming pool and garden.
This property offers access to a terrace, free private parking and free WiFi. 
The accommodation features a 24-hour front desk, free shuttle service and currency exchange for guests. Offering garden or city views, each unit comes with a kitchen, a satellite flat-screen TV and DVD player, desk, a washing machine and a private bathroom with shower and slippers. 
An oven, a microwave and toaster are also available, as well as a coffee machine and a kettle. Additional in-room amenities include wine or champagne, fruits and chocolates or cookies. 
A selection of options including warm dishes, fresh pastries and fruits is available for breakfast, and breakfast in the room is also available. Kenyatta International Conference Centre is 14 km from the apartment, while Nairobi National Museum is 16 km from the property. 
The nearest airport is Jomo Kenyatta International Airport, 3 km from Mambo Coffee Residences, 3Bdrm Aprt, All Ensuite, Close to JKI Airport with Free Transfer.
Mambo Coffee Residences, 3Bdrm Aprt, All Ensuite, Close to JKI Airport with Free Transfer has been welcoming Booking.com guests since 2022.
                          </p>
                      </div>
                  </div>
                  <form on:submit|preventDefault={Book}>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                              <span class="form-label">Name</span>
                              <input class="form-control" type="text" required bind:value={customer_details.name} />
                          </div>
                      </div>
                          <div class="col-md-6">
                              <div class="form-group">
                                  <span class="form-label">Check In</span>
                                  <input class="form-control" type="date" required bind:value={customer_details.checkInDate}>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="form-group">
                                  <span class="form-label">Check Out</span>
                                  <input class="form-control" type="date" required bind:value={customer_details.checkOutDate}>
                              </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                                <span class="form-label">Adults</span>
                                <select class="form-control" bind:value={customer_details.adults}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <span class="select-arrow"></span>
                            </div>
                        </div>
                      </div>
                      <div class="row">
                       
                          <div class="col-md-6">
                              <div class="form-group">
                                  <span class="form-label">Children</span>
                                  <select class="form-control" bind:value={customer_details.children}>
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                  </select>
                                  <span class="select-arrow"></span>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="form-group">
                                  <span class="form-label">Phone Number</span>
                                  <input class="form-control"  type="text"
                                  id="amount"
                                  inputmode="numeric"
                                  pattern="[0-9]*"
                                  maxlength="10"placeholder="eg 0712345678" required bind:value={customer_details.phonenumber} />
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="form-group">
                                  <span class="form-label">Email</span>
                                  <input class="form-control" type="email" required bind:value={customer_details.email} />
                              </div>
                          </div>
                          <div class="form-group col-md-6">
                              <span class="form-label">House Type</span>
                              <select class="form-control" required bind:value={customer_details.houseType}>
                                  <option value="" selected hidden>Select room type</option>
                                  <option>oneBedroom</option>
                                  <option>twoBedroom</option>
                                  <option>threeBedroom</option>
                              </select>
                              <span class="select-arrow"></span>
                          </div>
                      </div>
                      <div class="form-btn">
                          <button class="submit-btn" type="submit">Book</button>
                      </div>
                      <small>By Clicking the book button you agree with our rules and terms of service</small>
                  </form>
              </div>
          </div>
      </div>
  </div>
</div>

<style>
  .house-cards {
    margin:1rem 0.5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
    width: 300px;
  }
  
  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .card-details {
    margin-top: 1rem;
  }
  
  .card-details h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  .card-details p {
    margin: 0.5rem 0;
  }
  
  .status {
    display: inline-block;
    padding: 0.5rem;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    text-align: center;
  }
  
  .status.occupied {
    background-color: red;
  }
  
  .status.available {
    background-color: green;
  }
  .status .available {
      background-color: green;
      color: white;
      border-radius: 0.5rem;
  }
  
  .status .booked {
      background-color: red;
      color: white;
      border-radius: 0.5rem;
  }
  
  .section {
      position: relative;
      height: 101vh;
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
      font-size: 30px;
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
      width: 50%;
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


