import './App.css';
import React,{useState} from 'react';
import { Books } from './components/Books';
import {QueryClient, QueryClientProvider} from 'react-query';
import {MyHeader} from './components/MyHeader';
const queryClient = new QueryClient();

function App() {

const [title,setTitle]=useState('')



  return (
    <QueryClientProvider client={queryClient}>
    
    <MyHeader setTitle={setTitle} />
    <Books title={title}/>
    </QueryClientProvider>
    
  );
}

export default App;
