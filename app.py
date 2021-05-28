from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import numpy as np
from numpy.core.numeric import cross
from sklearn.preprocessing import StandardScaler
from datetime import date


app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})

model = pickle.load(open('random_forest_regression_model.pkl', 'rb'))
standard_to = StandardScaler()


@app.route("/predict", methods=['POST'])
def predict():
    Fuel_Type_Diesel = 0

    if request.method == 'POST':

        Year = int(request.form['Year'])

        Present_Price = float(request.form['Present_Price'])

        Kms_Driven = int(request.form['Kms_Driven'])

        Kms_Driven2 = np.log(Kms_Driven)

        Owner = int(request.form['Owner'])

        Fuel_Type_Petrol = request.form['Fuel_Type_Petrol']
        if(Fuel_Type_Petrol == 'Petrol'):
            Fuel_Type_Petrol = 1
            Fuel_Type_Diesel = 0
        else:
            Fuel_Type_Petrol = 0
            Fuel_Type_Diesel = 1

        Year = date.today().year - Year

        Seller_Type_Individual = request.form['Seller_Type_Individual']
        if(Seller_Type_Individual == 'Individual'):
            Seller_Type_Individual = 1
        else:
            Seller_Type_Individual = 0

        Transmission_Mannual = request.form['Transmission_Mannual']
        if(Transmission_Mannual == 'Mannual'):
            Transmission_Mannual = 1
        else:
            Transmission_Mannual = 0

        prediction = model.predict([[Present_Price,
                                     Kms_Driven2,
                                     Owner,
                                     Year,
                                     Fuel_Type_Diesel,
                                     Fuel_Type_Petrol,
                                     Seller_Type_Individual,
                                     Transmission_Mannual]])

        output = round(prediction[0], 2)
        message = ""
        if output < 0:
            message = "Sorry you cannot sell this car"
        else:
            message = "You Can Sell The Car at {} Lakhs".format(output)

        return jsonify(code=200, message=message, value=output)
    else:
        return jsonify(code=404, error="Operation not supported")


if __name__ == "__main__":
    app.run(debug=True)
