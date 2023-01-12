import { useQuery } from "react-query";
import {api} from "../api/rootApi";


const getBlogposts = async () => {
    const response = await api.get("blog/posts")
    console.log(111,response)
    return response.data;

}

const useBlogpostsData = () =>{
    return useQuery('blogposts',getBlogposts)
}

export default useBlogpostsData;