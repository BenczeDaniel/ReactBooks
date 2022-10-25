import React from 'react'
import axios from 'axios';
import {useQuery} from 'react-query';
import { getCateg } from './getData'; 
import {Category} from './Category';
import Box from '@mui/material/Box';

export const Books =({title})=>{
  const {data,status} =useQuery('category',getCateg)
  status == 'success' && console.log(data.data)
  console.log('Books komponens:',title)


    return (
   
    <Box display="flex" justifyContent="center" sx={{bgcolor: "#e9ecef",height: '100vh'}}>
    {status=='error'  && <div>Error fetching DATA...</div>}
    {status=='loading' && <div>Fetching data...</div>}
    {status=='success' && <Category categories={data.data} title={title}/>}
 
        
    
   
   </Box>
    )
}


