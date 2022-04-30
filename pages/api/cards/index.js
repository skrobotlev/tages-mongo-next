import dbConnect from "../../../utils/dbConnect";
import Card from "../../../server/models/card";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        console.log("GETTT");
        const cards = await Card.find({});

        res.status(200).json({ success: true, data: cards });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log(req.body, "bodu");
        const card = await Card.create(req.body);

        res.status(201).json({ success: true, data: card });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
