"use client";

import CaseDetailsCard from "@/components/CaseDetailsCard";
import CaseDetailsPage from "@/components/CaseDetailsPage";
import { CaseDetails } from "@/types/types";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import Image from "next/image";

async function sendRequest(url: string, { arg }: { arg: { query: string } }) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

export default function Chat() {
  const { trigger, isMutating } = useSWRMutation(
    "http://localhost:3001/api/sql",
    sendRequest
  );
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Partial<CaseDetails>[]>([]);
  const [sqlResults, setSqlResults] = useState<string>("");
  const [activeCase, setActiveCase] = useState<CaseDetails[] | null>();

  return (
    <div className={`${!activeCase && "hero"} min-h-screen`}>
      <div className="hero-content p-8 flex-col lg:flex-row-reverse w-full">
        {results.length === 0 && (
          <Image src="/Lawyer.gif" alt={"Lawyer"} width={800} height={800} />
        )}
        <div className="grid w-full grid-flow-row justify-stretch mr-4">
          <div className="pb-4">
            <h1 className="text-5xl font-bold">verdict.ai ✨</h1>
          </div>
          {results.length === 0 && (
            <p className="text-lg text-justify">
              Narzędzie dla profesjonalnych pełnomocników, pomagające w
              efektywnym wyszukiwaniu podobnych orzeczeń i ich analizie w formie
              rozmowy z dokumentem. Wersja przystosowana do pracy z
              orzecznictwem w sprawach o <b>alimenty</b>.
            </p>
          )}
          {activeCase ? (
            <>
              <a
                className="link underline-offset-4 mb-4"
                onClick={() => setActiveCase(null)}
              >
                &#9664; Wróć do wyników
              </a>
              <CaseDetailsPage caseDetails={activeCase} />
            </>
          ) : (
            <>
              <div className="my-8 flex justify-items-center gap-4">
                <input
                  type="text"
                  className="input input-bordered w-full h-full"
                  value={query}
                  placeholder="Sprawy w których dwójka nieletnich dzieci..."
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  className="btn btn-primary h-full"
                  onClick={async () => {
                    try {
                      const result = await trigger({ query });
                      setResults(JSON.parse(result.sqlResult));
                      setSqlResults(result.sql);
                    } catch (e) {
                      console.error(e);
                    }
                  }}
                >
                  {isMutating ? (
                    <span className="loading loading-spinner loading-sm" />
                  ) : (
                    "Wyszukaj"
                  )}
                </button>
                <div className="max-w-xs">
                  {sqlResults && (
                    <details className="collapse collapse-arrow bg-white">
                      <summary className="collapse-title font-medium">
                        Zapytanie
                      </summary>
                      <div className="collapse-content">
                        <code>{sqlResults}</code>
                      </div>
                    </details>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {results
                  .filter(
                    (v, i, a) =>
                      a.findIndex(
                        (v2) => v2.reference_number === v.reference_number
                      ) === i
                  )
                  .map((result) => (
                    <div key={result.reference_number}>
                      <CaseDetailsCard
                        caseDetails={results.filter(
                          (r) => r.reference_number === result.reference_number
                        )}
                        onClick={setActiveCase}
                      />
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
