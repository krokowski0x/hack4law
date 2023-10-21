import { CaseDetails } from "@/types/types";

export default function CaseDetailsCard({
  caseDetails,
  onClick,
}: {
  caseDetails: CaseDetails;
  onClick: Function;
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Orzeczenie {caseDetails.reference_number}</h2>
        <p>z dnia {caseDetails.judgement_date}</p>
        <h3>{caseDetails.court}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis dui mollis, blandit velit ut, placerat dolor.
           Nunc vulputate volutpat orci, non elementum risus interdum porta. Praesent dignissim vitae est condimentum tempus. Nam id leo dapibus, elementum odio eu, ultrices eros.
          Nullam quis nulla a nibh varius posuere a nec dui.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-info" onClick={() => onClick(caseDetails)}>Zobacz wyrok</button>
        </div>
      </div>
    </div>
  );
}
