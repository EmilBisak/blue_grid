import axios from "axios";

export const fetchData = (url, loading) => {
    loading();
    return axios.get(url)
        .then(res => {
            return res.data
        })
        .catch(error => console.log(error))
}