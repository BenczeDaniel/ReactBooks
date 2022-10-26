import axios from "axios";

export const getCateg = async () => {
    const response = await axios.get(url+'/categ');
    return await response;
};

export const getSelBooks = async ({queryKey}) => {
    console.log('queryKey:',queryKey[1]);
    
    if(queryKey[2].length > 0) {
        const response = await axios.get(`/books/title/${queryKey[2]}`);
        return await response;
    }
    


    else if(queryKey[1].length > 0) {
        const response = await axios.get(`/books/${queryKey[1]}`);
    return await response;

   
    }else{
        const response = await axios.get('/books');
        return await response;
    }





};
