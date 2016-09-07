Document Browser 
================

Document browser using Flask python JWT Backend and Front-End with Bootstrap.

* Python 3.x
* PyJWT  -  Python library which allows you to encode and decode JSON Web Tokens (JWT)
* Flask
* Flask-RESTful
* Express
* JWT
* React
* Redux
* React-router
* ES6

![screenshot](http://i.imgur.com/F60Vy80.png)

Installation
-------------

In order to run the application you need to have `python` and `pip` installed. Once you've set those 2 enviroment variables then use the following commands:

    $ virtualenv venv
    $ source venv/bin/activate
    (venv) $ pip install -r requirements.txt

If you are on Windows, then use the following commands instead:

    $ virtualenv venv
    $ venv\Scripts\activate
    (venv) $ pip install -r requirements.txt


Running
-------

To run the server use the following command:

    (venv) $ python run_api.py

     * Running on http://127.0.0.1:3000/ (Press CTRL+C to quit)
     * Restarting with stat
     * Debugger is active!
     * Debugger pin code: 125-748-005
     

To exit from virtualenv, just type deactivate.

API Documentation
-----------------
  - POST **/login**
