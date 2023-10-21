export interface CaseDetails {
  reference_number?: string
  court?: string
  judgement_date?: string
  publication_date?: string
  mother_income?: number
  father_income?: number
  siblings?: number
  website?: string
  children?: ChildDetails[]
}

export interface ChildDetails {
  child_age?: number
  alimony_asked?: number
  alimony_granted?: number
  general_expenses_plaintiff?: any
  general_expenses_court?: number
  additional_costs?: number
}

export interface BackendResponse {
  result: string
  sql: string
  sqlResult: CaseDetails[]
}