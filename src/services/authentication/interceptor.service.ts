import Axios from "axios-observable";
import authenticateService from "@/services/authentication/authenticate.service";
import { switchMap, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
const SCORIGIN = process.env.VUE_APP_SCORIGIN;
const ENVIRONMENT = process.env.VUE_APP_ENVIRONMENT;
const OCPAPIMSUBSCRIPTIONKEY = process.env.VUE_APP_OCPAPIMSUBSCRIPTIONKEY;

Axios.interceptors.request.use(
  (config: any) => {
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers["x-api-version"] = "1";
    config.headers["SCLocation"] = "1.1";
    config.headers["country"] = "co";
    config.headers["SCOrigen"] = SCORIGIN;
    config.headers["SCAmbiente"] = ENVIRONMENT;
    config.headers["Ocp-Apim-Subscription-Key"] = OCPAPIMSUBSCRIPTIONKEY;
    config.headers[
      "Authorization"
    ] = `Bearer ${authenticateService.getToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (res) => {
    // Do something with response data
    return res;
  },
  (error) => {
    // Do something with response error
    console.log("response => ", error);
    return authenticateService.refreshToken().pipe(
      switchMap((res: any) => {
        return res;
      }),
      catchError((error: any) => {
        return throwError(() => error);
      })
    );
  }
);
