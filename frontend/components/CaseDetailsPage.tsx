import { CaseDetails } from "@/types/types";
import { useChat } from "ai/react";

export default function CaseDetailsPage({
  caseDetails,
}: {
  caseDetails: CaseDetails;
}) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      <h1>{caseDetails.reference_number}</h1>
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}