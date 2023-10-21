import { CaseDetails } from "@/types/types";
import { fetcher } from "@/utils/inflation";
import { useChat } from "ai/react";
import { useEffect } from "react";
import useSWR from "swr";

export default function CaseDetailsPage({
  caseDetails,
}: {
  caseDetails: CaseDetails[];
}) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      body: {
        namespace: caseDetails[0].reference_number,
      },
    });
  // const { data: inflationData, error } = useSWR([500, "2020-01"], fetcher);

  return (
    <div className="flex gap-4 p-4 overflow-y-auto">
      <div className="flex flex-col gap-2 w-1/2">
        <div className="card bg-base-100 shadow-xl">
          <div className="p-8">
            <div className="flex justify-between">
              <h2 className="card-title font-black">
                Orzecznie {caseDetails[0].reference_number}
              </h2>
              <h3 className="text-lg underline decoration-double underline-offset-4 font-bold">
                {caseDetails[0].court}
              </h3>
            </div>

            <i>z dnia {caseDetails[0].judgement_date}</i>
            <h2 className="text-lg font-bold my-2">Rodzice:</h2>
            <div className="flex justify-between">
              <b>Dochód matki</b>
              <p>{caseDetails[0].mother_income || "-"}</p>
            </div>
            <div className="flex justify-between">
              <b>Dochód ojca</b>
              <p>{caseDetails[0].father_income || "-"}</p>
            </div>
            <h2 className="text-lg font-bold my-2">Dzieci:</h2>
            {caseDetails.map((child, i) => (
              <div key={i} className="flex flex-col gap-1 pb-4">
                <hr />

                <div className="flex justify-between">
                  <b>Wiek</b>
                  <p>{child.child_age || "-"}</p>
                </div>
                <div className="flex justify-between">
                  <b>Wnoszona kwota</b>
                  <p>{child.alimony_asked || "-"}</p>
                </div>
                <div className="flex justify-between">
                  <b>Zasądzona kwota</b>
                  <p>{child.alimony_granted || "-"}</p>
                </div>
                <div className="flex justify-between">
                  <b>Wydatki ogólne (powód)</b>
                  <p>{child.general_expenses_plaintiff || "-"}</p>
                </div>
                <div className="flex justify-between">
                  <b>Wydatki ogólne (sąd)</b>
                  <p>{child.general_expenses_court || "-"}</p>
                </div>
                <div className="flex justify-between">
                  <b>Potrzeby dodatkowe</b>
                  <p>{child.additional_costs || "-"}</p>
                </div>
              </div>
            ))}
            <div className="card-actions justify-end">
              <a
                target="_blank"
                href={caseDetails[0].website}
                className="btn btn-primary"
              >
                Pełne orzeczenie
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/2">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`${
              m.role === "user"
                ? "justify-self-end bg-white items-center"
                : "items-start"
            } mb-8 opacity-90 p-4 rounded-3xl w-fit `}
          >
            <span className="font-bold text-lg">
              {m.role === "user" ? "👩‍⚖️: " : "⚖️✨: "}
            </span>
            {m.role === "user" ? m.content : String(JSON.parse(m.content).text)}
            {m.role !== "user" &&
              JSON.parse(m.content).sourceDocuments.map(
                (doc: any, i: number) => (
                  <>
                    <details
                      key={i + 1}
                      className="collapse collapse-arrow my-2"
                    >
                      <summary className="collapse-title text-xl font-medium">
                        Źródło {i + 1}
                      </summary>
                      <div className="collapse-content">
                        <p>{doc.pageContent}</p>
                        <b>
                          Strona {doc.metadata["loc.pageNumber"]}, wiersze{" "}
                          {doc.metadata["loc.lines.from"]} -{" "}
                          {doc.metadata["loc.lines.to"]}
                        </b>
                      </div>
                    </details>
                    <hr />
                  </>
                )
              )}
          </div>
        ))}

        <form
          className="my-4 flex justify-center gap-2 mb-4"
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
            {isLoading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              "Zapytaj"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
