import { AlertData, ErrorStatus, FormError } from "../types/errors";

export const handleErrors = (err: any) => {
  let formErrors: any = {};
  let alertsData: AlertData = {
    title: "",
    detail: "",
  };
  const errorHandler = () => {
    if (err?.response.status === ErrorStatus.UNPROCESSABLE_ENTITY) {
      err?.response.data.detail.map(
        (error: FormError) => (formErrors[error.loc[1]] = error.msg)
      );
      alertsData.title = "User Input Errors";
      alertsData.detail = "Please check the data provided and try again";
    } else {
      alertsData.title = err.response.statusText;
      alertsData.detail = err.response.data?.detail;
    }
  };
  errorHandler();
  return { formErrors, alertsData };
};
