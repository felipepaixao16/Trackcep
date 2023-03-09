import axios from "axios";

const maps = axios.create({
    baseURL:'https://www.google.com/maps/embed/v1/place?key='
});

export default maps;