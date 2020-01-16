import { ADD_PLACE, SET_PLACES } from './places-action';
import Place from '../model/place';

const initalState = {
    places: []
}

export default ( state = initalState, action) => {
    switch(action.type){
        case ADD_PLACE:
            const newPlace = new Place(action.placeData.id.toString(), action.placeData.title, action.placeData.image)
            return {
                places: state.places.concat(newPlace)
            }
        case SET_PLACES:
            return {
                places: action.placeData.map(pl => new Place(pl.id.toString(), pl.title, pl.imageUri))
            }
        default:
            return state;
    }
}