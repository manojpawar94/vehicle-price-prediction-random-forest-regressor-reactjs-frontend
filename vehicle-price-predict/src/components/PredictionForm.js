import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { setPrediction } from '../redux/action'

export const PredictionForm = () => {
    const dispatch = useDispatch()

    const [year, setYear] = useState("")
    const [showroomPrice, setShowroomPrice] = useState("")
    const [kmsDriven, setKmsDriven] = useState("")
    const [owner, setOwner] = useState("")
    const [fuelType, setFuelType] = useState("Petrol")
    const [sellerType, setSellerType] = useState("Individual")
    const [transmissionType, setTransmissionType] = useState("Mannual")

    const handleSubmit = (e) => {
        e.preventDefault();

        let requestBody = {
            purchasedYear: year,
            showroomPrice: showroomPrice,
            kmsDriven: kmsDriven,
            owner: owner,
            fuelType: fuelType,
            sellerType: sellerType,
            transmissionType: transmissionType,
        }

        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: new URLSearchParams(requestBody),
        };

        // alert(JSON.stringify(requestBody))

        fetch('http://127.0.0.1:5000/predict', requestOptions)
            .then(response => response.json())
            .then(data => {
                // alert(data)
                dispatch(setPrediction(data.value, data.message))
            });
    }

    const reset = () => {
        setYear("")
        setShowroomPrice("")
        setKmsDriven("")
        setOwner("")
        setFuelType("Petrol")
        setSellerType("Individual")
        setTransmissionType("Mannual")
    }

    return (<Form>
        <Row>
            <Col sm={4}>
                <Form.Group controlId="year">
                    <Form.Label><strong>Purchased Year</strong></Form.Label>
                    <Form.Control type="number" size="sm" placeholder="Purchased Year"
                        value={year} onChange={e => setYear(e.target.value)} />
                </Form.Group>
            </Col>
            <Col sm={4}>
                <Form.Group controlId="showroomPrice">
                    <Form.Label><strong>Showroom Price <i>(in Lakhs)</i></strong></Form.Label>
                    <Form.Control type="number" size="sm" placeholder="Showroom Price"
                        value={showroomPrice} onChange={e => setShowroomPrice(e.target.value)} />
                </Form.Group>
            </Col>
            <Col sm={4}>
                <Form.Group controlId="kmsDriven">
                    <Form.Label><strong>Kilometers Driven</strong></Form.Label>
                    <Form.Control type="number" size="sm" placeholder="KM Driven"
                        value={kmsDriven} onChange={e => setKmsDriven(e.target.value)} />
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col sm={4}>
                <Form.Group controlId="owner">
                    <Form.Label><strong>Previous Owners</strong></Form.Label>
                    <Form.Control type="number" size="sm" placeholder="Previous Owners"
                        value={owner} onChange={e => setOwner(e.target.value)} />
                </Form.Group>
            </Col>
            <Col sm={4}>
                <Form.Group controlId="fuelType">
                    <Form.Label><strong>Fuel Type</strong></Form.Label>
                    <Form.Control as="select" size="sm"
                        value={fuelType} onChange={e => setFuelType(e.target.value)} >
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="CNG">CNG</option>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col sm={6}>
                <Form.Group controlId="year" key={`inline-radio`}>
                    <Form.Label><strong>Seller Type: </strong></Form.Label>  <span style={{ marginLeft: '8px' }}></span>
                    <Form.Check inline label="Individual"
                        name="Seller_Type_Individual"
                        type="radio" value="Individual"
                        checked={sellerType === "Individual"} onChange={e => setSellerType(e.target.value)} />
                    <Form.Check inline label="Dealer"
                        name="Seller_Type_Individual"
                        type="radio" value="Dealer"
                        checked={sellerType === "Dealer"} onChange={e => setSellerType(e.target.value)} />
                </Form.Group>
            </Col>
            <Col sm={6}>
                <Form.Group controlId="year" key={`inline-radio`}>
                    <Form.Label><strong>Transmission Type: </strong></Form.Label>  <span style={{ marginLeft: '8px' }}></span>
                    <Form.Check inline label="Mannual"
                        name="Transmission_Mannual"
                        type="radio" value="Mannual"
                        checked={transmissionType === "Mannual"} onChange={e => setTransmissionType(e.target.value)} />
                    <Form.Check inline label="Automatic"
                        name="Transmission_Mannual"
                        type="radio" value="Automatic"
                        checked={transmissionType === "Automatic"} onChange={e => setTransmissionType(e.target.value)} />
                </Form.Group>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col>
                <Button variant="primary" size="sm" onClick={handleSubmit}><strong>Predict</strong></Button>{'  '}
                <Button variant="secondary" size="sm" onClick={reset}><strong>Reset</strong></Button>{'  '}
            </Col>
        </Row>
    </Form>)
}