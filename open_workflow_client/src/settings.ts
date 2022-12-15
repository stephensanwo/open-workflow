export const ENV = "development";

export const Config = () => {
  if (ENV === "development") {
    const AUTH_SERVICE_URL = "http://127.0.0.1:4600/api/v1";
    const AUTH_SERVICE_PORT = "4600";

    return { AUTH_SERVICE_URL, AUTH_SERVICE_PORT };
  } else {
    const AUTH_SERVICE_URL = "http://127.0.0.1:4600/api/v1";
    const AUTH_SERVICE_PORT = "4600";

    return { AUTH_SERVICE_URL, AUTH_SERVICE_PORT };
  }
};
