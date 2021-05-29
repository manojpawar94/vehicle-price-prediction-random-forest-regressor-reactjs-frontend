from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import numpy as np
from numpy.core.numeric import cross
from sklearn.preprocessing import StandardScaler
from datetime import date


app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})

rfrModel = pickle.load(open('random_forest_regression_model.pkl', 'rb'))
standard_to = StandardScaler()


@app.route("/predict", methods=['POST'])
def predict():
    Fuel_Type_Diesel = 0

    if request.method == 'POST':
        purachedYear = int(request.form['purchasedYear'])
        No_Years_Used = date.today().year - purachedYear

        Present_Price = float(request.form['showroomPrice'])

        kmsDriven = int(request.form['kmsDriven'])
        Kms_Driven = np.log(kmsDriven)

        Owner = int(request.form['owner'])

        fuelType = request.form['fuelType']
        if(fuelType == 'Petrol'):
            Fuel_Type_Petrol = 1
            Fuel_Type_Diesel = 0
        else:
            Fuel_Type_Petrol = 0
            Fuel_Type_Diesel = 1

        sellerType = request.form['sellerType']
        if(sellerType == 'Individual'):
            Seller_Type_Individual = 1
        else:
            Seller_Type_Individual = 0

        transmissionType = request.form['transmissionType']
        if(transmissionType == 'Mannual'):
            Transmission_Mannual = 1
        else:
            Transmission_Mannual = 0

        prediction = rfrModel.predict([[Present_Price,
                                     Kms_Driven,
                                     Owner,
                                     No_Years_Used,
                                     Fuel_Type_Diesel,
                                     Fuel_Type_Petrol,
                                     Seller_Type_Individual,
                                     Transmission_Mannual]])

        output = round(prediction[0], 2)
        message = ""
        if output < 0:
            message = "Sorry you cannot sell this car."
        else:
            message = "Vehicle can be selled at price of {} lakhs.".format(output)

        return jsonify(code=200, message=message, value=output)
    else:
        return jsonify(code=404, error="Operation not supported")


if __name__ == "__main__":
    app.run(debug=True)
