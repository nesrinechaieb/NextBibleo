import mongoose from "mongoose";
var specialiteSchema = mongoose.Schema({
  nomspecialite: String,
});
const Specialite =
  mongoose.models.Specialite || mongoose.model("Specialite", specialiteSchema);
export default Specialite;
