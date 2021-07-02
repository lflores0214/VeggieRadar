import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface RestaurantInterface {
  name: string;
  address: { street: string; city: string; state: string; zipcode: number };
  cuisine: string;
  menu: {
    name: string;
    description: string;
    photoUrl: string;
    price: number;
  }[];
}

const restaurantSchema = new Schema<RestaurantInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zipcode: {
        type: Number,
        required: true,
      },
    },
    cuisine: {
      type: String,
    },
    menu: [
      {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        photoUrl: {
          type: String,
        },
        price: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
