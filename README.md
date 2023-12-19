# Skynet
Online Electronics Store

one for the client and the other for the server. The 'client' folder contains the React application, and to run the React app, you need to be inside the 'client' folder and execute the necessary commands. On the other hand, for the Python application, you should navigate to the 'server' folder. 
 
=> In Client folder: 
 
npm install  
 
npm update 
 
npm start 
 
npm audit fix—force(incase it’s not working) 
 
npm start 
 
 
It will be running on port 3000 
sample url: http://localhost:3000/ 
=============================================== 
 Database Setup 
=============================================== 
 
 
Install postgres 

https://www.pgadmin.org/docs/pgadmin4/development/restore_dialog.html


 
 
 
Sql Table create script: 
 
-- Table: public.order_details 
 
-- DROP TABLE IF EXISTS public.order_details; 
 
CREATE TABLE IF NOT EXISTS public.order_details 
( 
    order_no integer NOT NULL DEFAULT 
'nextval('order_details_order_no_seq'::regclass)',     subtotal numeric(10,2),     tax numeric(10,2),     total numeric(10,2),     payment character varying(50) COLLATE pg_catalog."default",     status character varying(20) COLLATE pg_catalog."default" DEFAULT 'ordered'::character varying, 
    address character varying(255) COLLATE pg_catalog."default" NOT NULL, 
    name character varying(100) COLLATE pg_catalog."default" NOT NULL, 
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,     state character varying(50) COLLATE pg_catalog."default",     zipcode character varying(20) COLLATE pg_catalog."default",     city character varying(30) COLLATE pg_catalog."default",     CONSTRAINT order_details_pkey PRIMARY KEY (order_no) 
) 
 
TABLESPACE pg_default; 
 
ALTER TABLE IF EXISTS public.order_details 
    OWNER to postgres; 
 	 
 	 
================================= 
Backend API 
================================== 
app.py 
 
in app.py python file: 
 
need to replace postgres configuration with respect to their system. My configuration: 
 
# Replace with your PostgreSQL database credentials db_connection = psycopg2.connect( 
    host="localhost",     database="skynet",     user="postgres", 
    password="postgres", 
) 
cursor = db_connection.cursor() 
 
 
--------------------------------------- 
To run backend api (In server folder): 
 
Reference for creating and activating Virtual environment: https://medium.com/datacat/a-simple-guide-to-creating-a-virtualenvironment-in-python-for-windows-and-mac-1079f40be518 
 
Create Virtual environment (Optional): 
mac : source venv/bin/activate   
windows: .\fenv\Scripts\activate 
 
pip3 install -r requiremnts.txt 
 
or 
 
pip3 install flask   
 
pip3 install flask_cors   
 
pip3 install psycopg2-binary 
 
pip3 install paypalrestsdk   
 
 
after installation of dependencies run the application: 
 
python3 app.py 
 
