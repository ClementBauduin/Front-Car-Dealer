import {useState} from 'react'
import CarsGallery from "./components/CarsGallery/CarsGallery";
import Sidebar from "./components/Sidebar/Sidebar";
import './index.css';
import { useQuery } from '@tanstack/react-query';
import readCarsRequest from './api/readCarsRequest';

export interface cars {
  _id : string,
  marque: string,      
  modele: string,
  prix: number,
  annee: number,
  img: string
}

export interface Input {
  marque?: string,
  modele?: string,
  prix?: number,
  annee?: number
}

function App() {
  
  const [searchButton,setSearchButton] = useState<boolean>(true)
  const [page,setPage] = useState<number>(1)
  const [input,setInput] = useState<Input>({marque: "",modele:"",prix:0,annee:0})
  const {isLoading,data:cars} = useQuery<cars[]>(['cars',page,searchButton], () => readCarsRequest(page,input.marque,input.modele,input.prix,input.annee))  
  
  return (
    <div style={{display:"flex"}}>
      <Sidebar page={page} setPage={setPage} setInput={setInput} searchButton={searchButton} setSearchButton={setSearchButton}/>
      <CarsGallery cars={cars} isLoading={isLoading}/>
    </div>
  );
}

export default App;
