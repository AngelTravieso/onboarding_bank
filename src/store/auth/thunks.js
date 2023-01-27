import { librepagoApi } from "../../api/librepagoApi"

export const preLogin = () => {

    return async(dispath, getstate) => {
        const { data } = await librepagoApi.get('nationality');

        console.log(data);

        
    }

}