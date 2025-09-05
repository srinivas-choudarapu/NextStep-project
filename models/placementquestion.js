const PlacementQuestionSchema = new mongoose.Schema({
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: "PlacementTopic", required: true },

  questionText: { type: String, required: true },
  resourceLink: { type: String },
  difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], default: "Medium" },
  companyTags: [String], // e.g. ["Amazon", "Microsoft"]
});

const PlacementQuestion = mongoose.model("PlacementQuestion", PlacementQuestionSchema);
module.exports = PlacementQuestion;
