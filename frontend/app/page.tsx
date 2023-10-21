"use client";

import CaseDetailsCard from "@/components/CaseDetailsCard";
import CaseDetailsPage from "@/components/CaseDetailsPage";
import { CaseDetails } from "@/types/types";
import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import Image from 'next/image'

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

    <div className="hero min-h-screen">

      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        {/* <div className="max-w-md"> */}

        {results.length === 0 && <Image src="/Lawyer.gif" alt={"Lawyer"} width={800}
          height={800} />}
        <div className="grid w-full grid-flow-row justify-stretch mr-4">
          <div className="pb-4"><h1 className="text-5xl font-bold">verdict.ai ✨</h1></div>
          {results.length === 0 && <p className="text-lg text-justify">Narzędzie dla profesjonalnych
            pełnomocników,
            pomagające w efektywnym
            wyszukiwaniu podobnych orzeczeń i
            ich analizie w formie rozmowy z
            dokumentem. Wersja przystosowana do pracy z orzecznictwem w sprawach o <b>alimenty</b>.</p>}
          {activeCase ? (
            <>
              <a className="link mb-4" onClick={() => setActiveCase(null)}>Wróć do wyników</a>
              <CaseDetailsPage caseDetails={activeCase} />
            </>
          ) : (
            <>
              <div className="my-4 flex justify-items-center gap-4">
                <input
                  type="text"
                  className="input input-bordered input w-full"
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
              <div className="flex pr-0">
                {results.map((result) => (
                  <div key={result.reference_number}>
                    <CaseDetailsCard caseDetails={result} onClick={setActiveCase} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {/* </div> */}
      {/* <footer className="footer footer-center p-4 bg-base-300 text-base-content mb-0">
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer> */}
    </div>
  );
}
