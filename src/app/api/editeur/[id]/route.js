import dbConnect from "../../../lib/mongodb";
import Editeur from "../../../models/Editeur";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const editeur = await Editeur.findById(id);
        if (!editeur) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: editeur });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const editeur = await Editeur.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!editeur) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: editeur });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedEditeur = await Editeur.deleteOne({ _id: id });
        if (!deletedEditeur) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
