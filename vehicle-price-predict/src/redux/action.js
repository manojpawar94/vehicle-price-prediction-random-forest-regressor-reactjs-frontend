import { PREDICT_PRICE } from "./actionType";

export const setPrediction = (value, message) => ({
    type: PREDICT_PRICE,
    payload: {
        predictedPrice: value,
        displayMessage: message
    }
})