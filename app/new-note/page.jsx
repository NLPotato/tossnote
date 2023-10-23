"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import generateQuestionId from "@utils/generate_id";

const NewNote = () => {
  const router = useRouter();
  const {data:session} = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [gptHints, setGptHints] = useState("");
  const [note, setNote] = useState({
    question: "",
    tags: ["type5"],
    userContents: {
      intro: "",
      idea1: "",
      idea2: "",
      conclusion: "",
    },
  });
  
  const makeNote = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/note/new", {
        method: "POST",
        body: JSON.stringify({
          gptHints: gptHints,
          question: note.question.charAt(0).toUpperCase() + note.question.slice(1), // Capitalize first letter only
          questionId: generateQuestionId(),
          userContents: note.userContents,
          userId: session?.user.id,
          tags: note.tags,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.loig(error);
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <>
      <Form
        type="New"
        note={note}
        setNote={setNote}
        // showGptHints={showGptHints}
        submitting={submitting}
        handleSubmit={makeNote}
      />
    </>
  );
};

export default NewNote;
