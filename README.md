# laptopstore_restapi

Generally, I am following the MVC pattern to make the Laptop Store REST API using nodejs, expressjs and mongoDB [BACKEND SERVER] and handles the error.

## Installation

Before clone the repo, you must have node.js on your device.
 
    Fork this repo 
    $ git clone https://github.com/<username_github>/laptopstore_restapi.git

## Remember to install all the dependencies...

    $ npm install
    
## Create the .env file
       PORT = 5000
       MONGO_URL = mongodb-url

## Usage

    $ node server.js
    
#

#### Check the endpoint with in the Postman API
### Getting all products from database
       GET /api/v1/product
### Getting all products from database with SEARCHING the fields product
       GET /api/v1/product?company=hp
       GET /api/v1/product?company=hp&featured=true
### Getting the products from database with LIMIT query, by default LIMIT is 10
       GET /api/v1/product?limit=20 
### Getting the products from database with Filtering query of price & rating
       GET /api/v1/product?numericFilter=price>50
       GET /api/v1/product?numericFilter=price>50,rating>=3.5
### Get a Single product by ID
       GET /api/v1/product/:id
### Create a new product to database
       POST /api/v1/product 
### Update a single product in database by ID
       PUT /api/v1/product/:id 
### Delete a product from database by ID
       DELETE /api/v1/product/:id
       
#

## Remove node_modules from git in vscode
#### Run below commands in your terminal
    git rm -r --cached node_modules
    git commit -am "node_modules be gone!"
    git push origin master

    
## Resources   
[Nodejs Docs](https://nodejs.org/en/docs/)
    
[Expressjs Docs](https://expressjs.com/en/guide/writing-middleware.html)
    
[MongoDB Docs](https://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/)

[MVC-Architecture Docs](https://www.geeksforgeeks.org/model-view-controllermvc-architecture-for-node-applications/)

[CORS](https://www.npmjs.com/package/cors)

[HELMET](https://www.npmjs.com/package/helmet)
