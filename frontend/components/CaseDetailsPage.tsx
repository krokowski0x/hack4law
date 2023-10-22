import { CaseDetails } from "@/types/types";
import { useChat } from "ai/react";
import { TypeAnimation } from "react-type-animation";

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
            <h2 className="text-lg font-bold my-2">Streszecznie:</h2>
            <svg
              className="w-4 h-4 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <i className="text-justify">
              &quot;{caseDetails[0].description}&quot;
            </i>
            <h2 className="text-lg font-bold mb-2 mt-4">Rodzice:</h2>
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
            <TypeAnimation
              sequence={[
                m.role === "user"
                  ? m.content
                  : String(JSON.parse(m.content).text),
              ]}
              speed={80}
              cursor={false}
            />

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
