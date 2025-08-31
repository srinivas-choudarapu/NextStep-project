const mongoose = require("mongoose");

const PlacementTopicSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "Data Structures", "Aptitude", "HR Questions"
  description: { type: String }, // Small intro about the topic
  order: { type: Number }, // to display topics in sequence
});
const PlacementTopic=new mongoose.model("PlacementTopic", PlacementTopicSchema);
module.exports = PlacementTopic;
