import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"7ce65419fb9d4ccc96c1b292d14077fe"
    }
})
