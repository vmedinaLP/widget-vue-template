import Axios from "axios-observable";
import "./interceptor.service";
const LUEGOPAGOAPI = process.env.VUE_APP_LUEGOPAGOAPI;
const APIKEYBACKPAGOS = process.env.VUE_APP_APIKEYBACKPAGOS;
export default {
  prueba() {
    return Axios.get("https://pokeapi.co/api/v2/pokemon");
  },
  refreshToken() {
    return Axios.post(`${LUEGOPAGOAPI}Auth/CreateToken`, null, {
      headers: { "x-api-key": APIKEYBACKPAGOS },
    });
  },
  getToken() {
    return localStorage.getItem("luegopago_data_token");
  },
};
