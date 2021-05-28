import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector, shallowEqual } from 'react-redux'
import { getPredictionMessage } from '../redux/selectors'

export const PredictionResult = () => {
    const message = useSelector(getPredictionMessage, shallowEqual)
    return (
        <Row>
            <Col>
                {message}
            </Col>
        </Row>
    )
}