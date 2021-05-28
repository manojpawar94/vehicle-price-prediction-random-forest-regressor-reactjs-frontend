export const getPredictionValue = store =>
    store && store.prediction ? store.prediction.predictedPrice : 0

export const getPredictionMessage = store =>
    store && store.prediction ? store.prediction.displayMessage : "No message to display"