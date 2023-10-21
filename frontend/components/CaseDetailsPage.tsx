import { CaseDetails } from "@/types/types";
import { fetcher } from "@/utils/inflation";
import { useChat } from "ai/react";
import useSWR from "swr";

export default function CaseDetailsPage({
  caseDetails,
}: {
  caseDetails: CaseDetails;
}) {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  const { data: inflationData, error } = useSWR([500, "2020-01"], fetcher);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2 w-1/2">
        <div className="card bg-base-100 shadow-xl">
          <div className="p-4">
            <h2 className="card-title">
              Orzecznie {caseDetails.reference_number}
            </h2>
            <p>z dnia {caseDetails.judgement_date}</p>
            <h3>{caseDetails.court}</h3>
            <div className="flex justify-between">
                  <p>Dochód matki</p>
                  <p>{caseDetails.mother_income}</p>
                </div>
                <div className="flex justify-between">
                  <p>Dochód ojca</p>
                  <p>{caseDetails.father_income}</p>
                </div>
            <h2 className="text-lg font-bold my-2">Dzieci:</h2>
            {caseDetails.children?.map((child, i) => (
              <div key={i} className="flex flex-col gap-1 pb-4">
                <hr />

                <div className="flex justify-between">
                  <b>Wiek</b>
                  <p>{child.child_age}</p>
                </div>
                <div className="flex justify-between">
                  <b>Wnoszona kwota</b>
                  <p>{child.alimony_asked}</p>
                </div>
                <div className="flex justify-between">
                  <b>Zasądzona kwota</b>
                  <p>{child.alimony_granted}</p>
                </div>
                <div className="flex justify-between">
                  <b>Wydatki ogólne (powód)</b>
                  <p>{child.general_expenses_plaintiff || "Brak"}</p>
                </div>
                <div className="flex justify-between">
                  <b>Wydatki ogólne (sąd)</b>
                  <p>{child.general_expenses_court}</p>
                </div>
                <div className="flex justify-between">
                  <b>Potrzeby dodatkowe</b>
                  <p>{child.additional_costs}</p>
                </div>
              </div>
            ))}
            <div className="card-actions justify-end">
              <a target="_blank" href={caseDetails.website} className="btn btn-primary">
                Pełne orzeczenie
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/2">
        {messages.map((m) => (
          <div key={m.id} className="flex flex-col gap-2">
            {m.role === "user" ? "User: " : "AI: "}
            {m.role === "user" ? m.content : String(JSON.parse(m.content).text)}
            {m.role !== "user" &&
              JSON.parse(m.content).sourceDocuments.map((doc, i) => (
                <div key={i} className="collapse collapse-arrow bg-white">
                  <input type="radio" name="my-accordion-2"  />
                  <div className="collapse-title text-xl font-medium">
                    Źródło {i + 1}
                  </div>
                  <div className="collapse-content">
                    <p>{doc.pageContent}</p>
                    <b>
                      Strony {doc.metadata["loc.lines.from"]} -{" "}
                      {doc.metadata["loc.lines.to"]}
                    </b>
                  </div>
                </div>
              ))}
          </div>
        ))}

        <form
          className="my-4 flex justify-center gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Na jakiej podstawie sąd przynał dzieciom alimenty?"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary" type="submit">
            Zapytaj
          </button>
        </form>
      </div>
    </div>
  );
}
