import dbConnect from "../../util/mongodb";
import { Restaurant } from "../../models/restaurant";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  await dbConnect();

  const restaurant = new Restaurant({
    name: "Veggie Palace",
    address: {
      street: "123 main st",
      city: "MyTown",
      state: "CA",
      zipcode: 92233,
    },
    menu: {
      name: "Yellow Curry",
      description: "Yellow curry with vegetables",
    },
  });

  restaurant
    .save()
    .then((response: any) => {
      res.status(200).json(response);
      console.log(response);
    })
    .catch((error: any) => {
      console.log(error);
    });
}
