import axios from "axios"

const readCarsRequest = async(page?:number,marque?:string,modele?:string,prix?:number,annee?:number) => {

    let url = `https://car-dealer.adaptable.app/api/v1`
    if (page !== undefined) {
        url += `?page=${page}&`
    } 
    if (marque !== undefined) {
        url += `marque=${marque}&`
    } 
    if (modele !== undefined) {
        url += `modele=${modele}&`
    } 
    if (prix !== undefined && !isNaN(prix) && prix !== 0 ) {
        url += `prix=${prix}&`
    } 
    if (annee !== undefined && !isNaN(annee) && annee !== 0) {
        url += `annee=${annee}`
    }
    console.log(url)
    const data = await axios.get(url);
    return data.data;
}

export default readCarsRequest;
