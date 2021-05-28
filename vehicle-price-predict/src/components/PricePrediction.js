import { PredictionForm } from './PredictionForm'
import { PredictionResult } from './PredictionResult'
import Card from 'react-bootstrap/Card'
import '../App.css'

export const PricePrediction = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <strong className="title">Predict Vehicle Selling Price</strong>
                    <hr></hr>
                    <PredictionForm />
                </Card.Body>
            </Card >
            <Card style={{ marginTop: '8px' }}>
                <Card.Body>
                    <strong className="title">Prediction Results</strong>
                    <hr></hr>
                    <PredictionResult />
                </Card.Body>
            </Card>
        </>
    )
}

