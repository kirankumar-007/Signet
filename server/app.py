from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
from paypalrestsdk import Order
import json

app = Flask(__name__)
CORS(app)

# Replace with your PostgreSQL database credentials
db_connection = psycopg2.connect(
    host="localhost",
    database="skynet",
    user="postgres",
    password="postgres",
)
cursor = db_connection.cursor()

@app.route("/create_order", methods=["POST"])
def create_order():
    # Handle the creation of PayPal order here

    # Example: Extract data from the request
    data = request.get_json()
    print(data)
    name = data.get("name")
    email = data.get("email")
    address = data.get("address")
    total = str(data.get("total"))
    city= data.get("city")
    state= data.get("state")
    zipcode= str(data.get("zipcode"))
   

    # Store user information in PostgreSQL
    cursor.execute(
        "INSERT INTO public.order_details (name, email, address,total,city,state,zipcode) VALUES (%s, %s, %s,%s, %s, %s, %s)",
        (name, email, address,total,city,state,zipcode),
    )
    db_connection.commit()

    return jsonify({"success": True})


@app.route("/getorder/<order_no>", methods=["GET"])
def get_order(order_no):
    # Handle the creation of PayPal order here

    # Example: Extract data from the request
    # cursor.execute("SELECT * FROM public.orders_details WHERE order_number = %s", (order_no,))
    cursor.execute("SELECT order_no,name,email,status,total FROM public.order_details WHERE order_no = %s", (order_no,))
    order_data = cursor.fetchone()
    if order_data:
        # Convert the result to a dictionary for JSON serialization
        order_dict = {
            "order_number": order_data[0],
            "customer_name": order_data[1],
            "email": order_data[2],
            "status": order_data[3],
            "total_amount": order_data[4],
            # Add more fields as needed 
        }
        return jsonify(order_dict)
    else:
        return jsonify({"error": "Order not found"}), 404




if __name__ == "__main__":
    app.run(debug=True)
