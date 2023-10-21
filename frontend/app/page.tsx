"use client";

import CaseDetailsCard from "@/components/CaseDetailsCard";
import CaseDetailsPage from "@/components/CaseDetailsPage";
import { CaseDetails } from "@/types/types";
import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";

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
  const { trigger } = useSWRMutation(
    "http://localhost:3001/api/sql",
    sendRequest
  );
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Partial<CaseDetails>[]>([]);
  const [activeCase, setActiveCase] = useState<CaseDetails | null>();

  return (
    <div className="mx-auto w-full h-full flex flex-col p-8">
      <h1 className="normal-case text-2xl font-bold mb-20">Alimenciarz 2.0</h1>


      {activeCase ? (
        <>
        <a className="link mb-4" onClick={() => setActiveCase(null)}>Wróć do wyników</a>
        <CaseDetailsPage caseDetails={activeCase}  />
        </>
      ) : (
        <>
              <div className="my-4 flex justify-center gap-2">
        <input
          type="text"
          className="input input-bordered w-full max-w-md"
          value={query}
          placeholder="Sprawy w których dwójka nieletnich dzieci..."
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={async () => {
            try {
              const result = await trigger({ query });
              setResults(result.sqlResult);
              console.log(results);
            } catch (e) {
              console.error(e);
            }
          }}
        >
          Wyszukaj
        </button>
      </div>
        <div className="flex gap-4">
          {results.map((result) => (
            <div key={result.reference_number}>
              <CaseDetailsCard caseDetails={result} onClick={setActiveCase} />
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
}
