const PlacementQuestionSchema = new mongoose.Schema({
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: "PlacementTopic", required: true },
  questionText: { type: String, required: true }, // e.g., "Find missing number in array"
  resourceLink: { type: String }, // LeetCode/GFG/HackerRank link
  difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], default: "Medium" },
  companyTags: [String], // e.g., ["Amazon", "Microsoft", "Google"]
});
const PlacementQuestion=new mongoose.model("PlacementQuestion", PlacementQuestionSchema);
module.exports = PlacementQuestion;
