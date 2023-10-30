import '@styles/globals.css'

export default function InputBox( { input, handleInputChange, handleSubmit }) {
  return (
    <form className="md:w-1/2 sm:w-3/4 fixed flex bottom-0 bg-white border border-gray-300 rounded mt-5 mb-5 mx-auto shadow-xl p-2" onSubmit={handleSubmit}>
      <input
        className="p-2 w-full" 
        value={input}
        onChange={handleInputChange}
        placeholder="Say something..."
      />
      <button type="submit" className="black_btn">
        Send
      </button>
  </form>
  )
}