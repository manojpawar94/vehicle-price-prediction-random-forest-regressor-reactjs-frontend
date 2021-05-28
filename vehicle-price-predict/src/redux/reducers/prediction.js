import { PREDICT_PRICE } from '../actionType'

const initialState = {
    predictedPrice: 0,
    displayMessage: 'Submit request to predict the vehicle price.'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PREDICT_PRICE:
            return {
                predictedPrice: action.payload.predictedPrice,
                displayMessage: action.payload.displayMessage
            }

        default:
            return state;
    }
}