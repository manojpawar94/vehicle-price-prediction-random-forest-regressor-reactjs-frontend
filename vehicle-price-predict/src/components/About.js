import Card from 'react-bootstrap/Card'

export const About = () => (
    <>
        <Card>
            <Card.Body>
                <Card.Title className="title" >
                    <strong>Vehicle Price Prediction System</strong>
                </Card.Title>
                <hr></hr>
                <table style={{ width: '100%' }}>
                    <tr>
                        <th style={{ width: '20%' }}></th>
                        <th style={{ width: '80%' }}></th>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <strong className="title">Machine Learning Model</strong>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Alogrithm</strong></td>
                        <td>Random Forest Regressor</td>
                    </tr>
                    <tr>
                        <td><strong>Hypertunning Technique</strong></td>
                        <td>RandomizedSearchCV</td>
                    </tr>
                    <tr>
                        <td><strong>Features</strong></td>
                        <td><code>[ 'Year', 'Selling_Price', 'Present_Price', 'Kms_Driven','Fuel_Type', 'Seller_Type', 'Transmission', 'Owner']</code></td>
                    </tr>
                    <tr>
                        <td><strong>Results</strong></td>
                        <td>
                            <ul>
                                <ol>MAE: 0.6912955737704893</ol>
                                <ol>MSE: 1.686948058083606</ol>
                                <ol>RMSE: 1.2988256457598941</ol>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Python Libraries</strong></td>
                        <td>
                            <ul>
                                <ol>Numpy</ol>
                                <ol>Pandas</ol>
                                <ol>Matplotlib</ol>
                                <ol>Seaborn</ol>
                                <ol>Sklearn</ol>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <strong className="title">Web Application</strong>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Backend Technology</strong></td>
                        <td>Flask REST API</td>
                    </tr>
                    <tr>
                        <td><strong>Frontend Technology</strong></td>
                        <td>
                            <ul>
                                <ol>React JS</ol>
                                <ol>React Redux</ol>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <strong className="title">About</strong>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Developer</strong></td>
                        <td>Manoj Pawar</td>
                    </tr>
                </table>
            </Card.Body>
        </Card>
    </>
)