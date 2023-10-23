import { Schema, model, models } from "mongoose";

const NoteSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  question: {
    type: String,
    required: [true, "Question is required."],
  },
  questionId: {
    type: String,
    required: [true, "Question ID is required."],
  },
  userContents: {
    type: Object,
    required: [true, "userContents are required."],
  },
  tags: {
    type: Object,
    required: [true, "Tags are required."],
  },
  gptHints: {
    type: String,
    required: [true, "GptHints are required."],
  },
});

const Note = models.Note || model("Note", NoteSchema);

export default Note;
