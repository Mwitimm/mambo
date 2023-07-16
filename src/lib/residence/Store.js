import {writable} from "svelte/store"


const residentials = writable([

    {
        type: 'oneBedroom',
        price: 10_000,
        isBooked: false,
        location: 'jkia',
        image: 'https://i.ibb.co/Dp6sps1/1bed.jpg'
      },
      {
        type: 'twoBedroom',
        price: 20_000,
        isBooked: false,
        location: 'jkia',
        image: 'twobedroom.jpg'
      },
      {
        type: 'threeBedroom',
        price: 30_000,
        isBooked: false,
        location: 'jkia',
        image: 'threebedroom.jpg'
      }
    ]
)

export default residentials