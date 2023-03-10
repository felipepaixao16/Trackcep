import axios from "axios";

//https://viacep.com.br/ws/41302250/json

//aqui estou importando minha url base onde será inserido os valores para consulta da minha api
//que no caso será o cep do usuário.
const api = axios.create ({
    baseURL: "https://viacep.com.br/ws/"
});

//aqui estou exportando a api pra poder usar
export default api;
