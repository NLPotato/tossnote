import { connectToDB } from "@utils/database";
import Note from "@models/note";

export const POST = async (req) => {
  const [question, questionId, gptHints, userContents, userId, tags] =
    await req.json();

  try {
    await connectToDB(); // required every API call b/c it's a lambda function
    const newNote = new Note({
      creator: userId,
      question: question.toLowerCase(),
      questionId: questionId,
      userContents: userContents,
      tags: tags,
      gptHints: gptHints,
    });

    await newNote.save();

    return new Response(JSON.stringify(newNote), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new note", { status: 500 });
  }
};
