import Style from "./CarsGallery.module.css" 
import CarCard from "../CarCard/CarCard"
import {cars} from '../App/App'

interface Props {
  cars: cars[],
  isLoading: boolean
}

export default function CarsGallery(props:Props) {
  let cars = props.cars
  let isLoading = props.isLoading
  const displayCars = cars?.map(car => <CarCard key={car._id} marque={car.marque} modele={car.modele} prix={car.prix} annee={car.annee} img={car.img}></CarCard>)
  console.log(displayCars);
  return (
    <>
        <div className={Style.CarsContainer}>
            {isLoading ? <CarCard marque={"Loading..."}></CarCard>  :
            displayCars.length == 0 ? <h1>Aucun résultat correspondant à vos critères</h1> : displayCars
            }

        </div>

    </>
    
  )
}