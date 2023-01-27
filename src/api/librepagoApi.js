import axios from "axios";
import { urls } from "./urls";

export const librepagoApi = axios.create({
    baseURL: urls.produccion,
});