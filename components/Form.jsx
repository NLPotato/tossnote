import Link from "next/link";

const Form = ({ type, note, setNote, showGptHints, submitting, handleSubmit }) => {

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Note</span>
      </h1>
      <p className="desc text-left max-w-md">
        나만의 생각과 표현을 정리해 보세요.
      </p>

      <form
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Question</span>
          <textarea 
            value={note.question}
            onChange={(e) => setNote({...note, question: e.target.value})}
            placeholder="새 질문을 작성해 주세요"
            required
            className="form_input"
          />
        </label>

        <button className="black_btn">
          Brainstorm
          {/* 💥TODO: Get GPT Hints */}
        </button>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Intro</span>
          <textarea 
            // value={note.userContents.intro}
            onChange={
              (e) => {
                const {name, value} = e.target;
                setNote(prev => ({...prev, userContents: {...prev.userContents, [name]: value}}));
              }
            }
            placeholder="서론 및 핵심 아이디어를 정리해 주세요"
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Idea 1</span>
          <textarea 
            // value={note.userContents.idea1}
            onChange={
              (e) => {
                const {name, value} = e.target;
                setNote(prev => ({...prev, userContents: {...prev.userContents, [name]: value}}));
              }
            }
            placeholder="아이디어 1"
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Idea 2</span>
          <textarea 
            // value={note.userContents.idea2}
            onChange={
              (e) => {
                const {name, value} = e.target;
                setNote(prev => ({...prev, userContents: {...prev.userContents, [name]: value}}));
              }
            }
            placeholder="아이디어 2"
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Conclusion</span>
          <textarea 
            // value={note.userContents.conclusion}
            onChange={
              (e) => {
                const {name, value} = e.target;
                setNote(prev => ({...prev, userContents: {...prev.userContents, [name]: value}}));
              }
            }
            placeholder="아이디어 요약 및 마무리 해주세요."
            className="form_textarea"
          />
        </label>

      <div className="flex-end mx-3 mb-5 gap-4">
        <Link href="/" className="text-gray-600 text-sm">
          취소
        </Link>

        <button type="submit" disabled={submitting} className="bg-primary-orange rounded-full px-5 py-1.5 text-sm text-white" >
          {submitting ? '노트 수정' : '새 노트 추가'}
        </button>


      </div>

      </form>
    </section>
  );
};

export default Form;
