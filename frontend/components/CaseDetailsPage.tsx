import { CaseDetails } from "@/types/types";
import { useChat } from "ai/react";

export default function CaseDetailsPage({
  caseDetails,
}: {
  caseDetails: CaseDetails;
}) {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();

  return (
    <div>
      <h1>{caseDetails.reference_number}</h1>
      <div className="stats shadow">

{caseDetails.children?.map((child, i) => (
  <div key={i} className="stat ">
  <div className="stat-figure text-secondary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </div>
  <div className="stat-title">Downloads</div>
  <div className="stat-value">31K</div>
  <div className="stat-desc">Jan 1st - Feb 1st</div>
</div>
))}


  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>

</div>
      {messages.map((m) => (
        <div key={m.id}>
          {m.role === "user" ? "User: " : "AI: "}
          {m.role === "user" ? m.content : String(JSON.parse(m.content).text)}
          {m.role !== "user" &&
            JSON.parse(m.content).sourceDocuments.map((doc, i) => (
<div key={i} className="collapse bg-base-200">
  <input type="checkbox" />
  <div className="collapse-title text-xl font-medium">
Źródło {i + 1}
  </div>
  <div className="collapse-content">
    <p>{doc.pageContent}</p>
    <b>Strony {doc.metadata["loc.lines.from"]} - {doc.metadata["loc.lines.to"]}</b>
  </div>
</div>
            ))
          }
        </div>
      ))}

      <form className="my-4 flex justify-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary" type="submit">Zapytaj</button>
      </form>
    </div>
  );
}
