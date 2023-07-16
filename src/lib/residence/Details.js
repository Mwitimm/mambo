import {writable} from "svelte/store"


const customerDetails = writable(

    {
      
        checkInDate: '',
        checkOutDate: '',
        adults: '',
        children: '',
        email: '',
        phonenumber: '',
        houseType: '',
        name:""
      }
    
)

export default customerDetails