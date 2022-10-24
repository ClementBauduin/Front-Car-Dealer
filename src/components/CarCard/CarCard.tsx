import Style from '../CarCard/CarCard.module.css';

interface car {
  key?: string,
  marque: string,
  modele?: string,
  prix?: number,
  annee?: number,
  img?: string
}

export default function CarCard(props : car) {
  return (
    <div className={Style.Wrapper}>
      <img src={props.img} className={Style.img}></img>
      <h1>{props.marque} {props.modele}</h1>
      <p>Prix : {props.prix}€</p>
      <p>Année : {props.annee}</p>
    </div>
  )
}
