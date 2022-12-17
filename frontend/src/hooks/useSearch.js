import { useQuery } from "react-query";
import {api} from "../api/rootApi";


const getSearchpost = async (keyword) => {
    const response = await api.get(`allposts/?search=${keyword}`)
    return response.data;

}

const useSearch = (id) =>{
    return useQuery(['search'], ()=>getSearchpost(id))
}

export default useSearch;