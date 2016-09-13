## Document Browser 

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


### SCREENSHOTS

Here are some screenshots of the project.

![screenshot](http://i.imgur.com/F60Vy80.png)


## CLONING THE PROJECT

Open terminal and run the following command.

`$ git clone https://github.com/mnyamor/homework-frontend-api.git`
`$ cd homework-frontend-api`


## INSTALLATION

To run the project, you'll need to go through some installation steps. You need to make sure your environment has python, node, and npm installed


### NODE AND NPM

Go to Nodes.js® web site (https://nodejs.org/en/). It should automatically suggest what package to download.

If not, navigate to the Downloads section and select your prefered installer depending on your OS. Once you have it downloaded, follow the instructions and everything should be fine.

### INSTALLING HOMEBREW

If you are using a Mac OS X and wish to install Node.js and npm using Homebrew, You'll first need to install Homebrew using the following command: 

You can skip this step if you are already using homebrew and jump to the next step.

`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`

### INSTALLING NODE AND NPM VIA HOMEBREW

Once you have homebrew installed, you can run the following command:
    
`brew update`
`brew doctor`
`brew install node`
`npm install -g grunt-cli` # to test out your node, try installing grunt

### CHECK YOUR NPM AND NODE VERSION

Make sure npm version is 3.x and node that you are using the latest version of node

`$ node -v`
`$ npm -v`


### RUNNING THE WEB API

In order to run the application you need to have `python`  (https://www.python.org/downloads/) and `pip` (https://pip.pypa.io/en/stable/installing/) installed. 

Once you've set those 2 enviroment variables then use the following commands:

`$ virtualenv venv`
`$ source venv/bin/activate`
`(venv) $ pip install -r requirements.txt`

If you are on Windows, then use the following commands instead:

`$ virtualenv venv`
`$ venv\Scripts\activate`
`(venv) $ pip install -r requirements.txt`
 

To run the server, use the following command:

`(venv) $ python run_api.py`

You should see the following output on the terminal

      Running on http://127.0.0.1:3000/ (Press CTRL+C to quit)
      Restarting with stat
      Debugger is active!
      Debugger pin code: 125-748-005
     

To exit from virtualenv, just type deactivate.


### RUNNING THE MAIN PROJECT

On a new tab, navigate to the project folder and type the following
    
`$ homework-frontend-api`
`$ npm install`
`$ npm run server`  # will run nodemon with watch and compile code as it changes

You should now be see the following
    
    [nodemon] starting `babel-node server/index.js`
     Development server listening on port 8555

Open your browswer and navigate to http://localhost:8555/


### API DOCUMENTATION

  - POST: **/login**
  - GET:  **/document**
  - GET:  **/document/:id/text**
