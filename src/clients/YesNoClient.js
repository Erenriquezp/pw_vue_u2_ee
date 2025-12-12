import axios from 'axios';

const consumirAPI = async () => { // no es correcto poner directamente export 
    const respuesta = axios.get('https://yesno.wtf/api').then(response => response.data);
    console.log(respuesta);
    return respuesta;
}

export async function consumirAPIFacade() { // función que llama a consumirAPI
    return await consumirAPI(); // await siempre que se llame a una función async
}
