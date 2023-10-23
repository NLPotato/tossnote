"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import { Router } from "next/router";
import generateQuestionId from "@utils/generate_id";

const NewNote = () => {
  const [submitting, setSubmitting] = useState(false);
  const [gptHelp, setGptHelp] = useState("");
  const [note, setNote] = useState({
    question: "",
    questionId: generateQuestionId(),
    tag: "",
    userId: "",
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
          gptHelp: gptHelp,
          question: note.question,
          questionId: note.questionId,
          userContents: note.userContents,
          tag: note.tag,
          userId: session?.user.id,
        }),
      });
      if (response.ok) {
        Router.push("/");
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
        // showGptHelp={showGptHelp}
        submitting={submitting}
        handleSubmit={makeNote}
      />
    </>
  );
};

export default NewNote;
