import { CaseDetails } from "@/types/types";

export default function CaseDetailsCard({
  caseDetails,
  onClick,
}: {
  caseDetails: CaseDetails[];
  onClick: Function;
}) {
  const desc =
    "Sprawa dotyczyła alimentów dla małoletniej J.K., reprezentowanej przez jej matkę M.S., przeciwko R.K., ojcu dziecka. M.S. wniosła o zasądzenie alimentów w kwocie 1100 zł miesięcznie, podczas gdy R.K., pracujący na ¼ etatu jako mechanik samochodowy, wnosił o oddalenie powództwa ponad kwotę 600 zł, twierdząc, że nie jest w stanie przeznaczyć większej kwoty na utrzymanie dziecka. Sąd zasądził alimenty w kwocie 850 zł miesięcznie, płatne z góry do dnia 10 każdego miesiąca, począwszy od 1 maja 2023 roku";
  return (
    <div className="card w-96 h-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          Orzeczenie {caseDetails[0].reference_number}
        </h2>
        <i>z dnia {caseDetails[0].judgement_date}</i>
        <b>{caseDetails[0].court}</b>
        <svg
          className="w-4 h-4 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <i className="text-justify">&quot;{caseDetails[0].description}&quot;</i>

      </div><div className="card-actions justify-end m-8">
          <button
            className="btn btn-outline btn-info"
            onClick={() => onClick(caseDetails)}
          >
            Zobacz wyrok
          </button>
        </div>
    </div>
  );
}
