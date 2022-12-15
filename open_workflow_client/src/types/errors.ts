export interface FormError {
  loc: Array<string>;
  msg: string;
  type: string;
  ctx?: object;
}

export interface AlertData {
  title: string;
  detail: string;
}

export enum ErrorStatus {
  "UNPROCESSABLE_ENTITY" = 422,
}
