import {writable} from "svelte/store"


const mambo_residences = writable([

   
  {
    type: 'oneBedroom',
    price: 10_000,
    isBooked: false,
    location: 'jkia',
    image:"https://i.ibb.co/Dp6sps1/1bed.jpg"
  },
  {
    type: 'twoBedroom',
    price: 20_000,
    isBooked: false,
    location: 'jkia',
    image: "https://i.ibb.co/Jvd4zW5/2bed.jpg"
  },
  {
    type: 'threeBedroom',
    price: 30_000,
    isBooked: false,
    location: 'jkia',
    image: "https://i.ibb.co/CsMRQrT/3bed.jpg"
  }
    ]
)

export default mambo_residences