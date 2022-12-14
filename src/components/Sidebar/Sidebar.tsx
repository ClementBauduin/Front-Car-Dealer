import Style from './Sidebar.module.css';
import logo from '../../assets/carDealerLogo.png';
import {Link} from 'react-router-dom'
import {useForm} from "react-hook-form"
import {Input} from "../App/App"
import {useState} from 'react'

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setInput: React.Dispatch<React.SetStateAction<Input>>,
  searchButton: boolean,
  setSearchButton: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar(props:Props) {
  
  const {page} = props
  const {setPage} = props
  const {setInput} = props
  const {searchButton} = props
  const {setSearchButton} = props
  const {register,handleSubmit,reset,formState: {errors}} = useForm()

  const [showFilters,setShowFilters] = useState<boolean>(true)
  
  const onSubmit = (data:Input) => {
    setInput(data)
    setSearchButton(!searchButton)
    reset()
  }

  const removeOne = (e) => {
    if (page - 1 > 0) {
      setPage(page -1)
    }   
  }

  const addOne = () => {
    setPage(page + 1)
  }



  return (
    <div className={Style.SidebarContainer}>
      <div className={Style.ImgWrapper}>
        
        <Link to='/'>
          <img id={Style.logo} src={logo} alt="car dealer logo"></img>
        </Link>
        <div className={Style.HamburgerMenu} onClick={() => setShowFilters(!showFilters)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
        <form onSubmit={handleSubmit(onSubmit)} className={showFilters ? Style.formMobile : Style.form}>
            <div className={Style.FilterWrapper}>
                <label>MARQUE</label>
                <input type="text" {...register("marque",{setValueAs: marque => {
                  return marque.toLowerCase()
                    .split(' ')
                    .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
                    .join(' ') 
                }})}></input>
            </div>
            <div className={Style.FilterWrapper}>
                <label>MOD??LE</label>
                <input type="text" {...register("modele")}></input>
            </div>
            <div className={Style.FilterWrapper}>
                <label>PRIX MAX</label>
                <input type="text" {...register("prix",{
                  pattern: /^[0-9]{0,9}$/,
                  setValueAs: v => parseInt(v)
                })}></input>
            </div>
            <div className={Style.FilterWrapper}>
                <label>ANN??E MIN</label>
                <input type="text" {...register("annee",{
                  pattern: /^[0-9]{4}$/,
                  setValueAs: v => parseInt(v)
                })}></input>
            </div>
            <button type='submit'>Rechercher</button>
            <h2 className={Style.PageTitle}>Page</h2>
            <div className={Style.PaginationWrapper}>
              <button type='button' className={Style.Bubble} value={page-1} onClick={(e) => removeOne(e)}> Previous</button>
              <button type='button' className={Style.Bubble}>{page}</button>
              <button type='button' className={Style.Bubble} onClick={() => addOne()}>Next</button>
            </div>
        </form>
    </div>
  )
}