# Love, Peace & Records Webshop

Welcome to Love, Peace & Records Webshop, the grooviest little LP store with all your Woodstocky needs...Man.

# The assignment

The assignment was to make a webshop using both client and server. The server should use a Mongodb database and based on a REST-API with Express. The client should be a responsive React webpage displaying all products in different categories. To make a purchase on the page you need to log in. Purchases removes items from the stock on the database.
Products put in the shoppingcart should be saved in the local storage.
A logged in admin should be able to control the stock and check all orders.

# More info
We used grommet and MongoDB Atlas to create this page.

## Known bugg
Sometimes the capital letter in row 7 "import Admin from "./components/admin/[a]dmin" in the file ./Client/src/App.js swaps. Just change it if you get this error.

[Github Repository](https://github.com/krstf456/lp-store)


# Start / Install

1. Open two terminals in VSCode.  

---------------

2. In the first terminal enter **cd client**. 

Then:
 - If this is the **first time** you run this project: enter npm **install** and after that **npm start** in this terminal. 
- If you've **runned it before**: just type **npm start** in this terminal.

A react client will open the default browser on http://localhost:3000  

---------------

3. In the second terminal enter **cd server**.

Then:
 - If this is the **first time** you run this project: run **npm install** and after that **npm start** in this terminal. 
- If you've **runned it before**: just type **npm start** in this terminal.

Node will start an express api server on http://localhost:5000

---------------

4. During testing, images should be ignored locally. Add the two last outcommented parts in other cases. 

### Some default user to use for testing purposes:
Log in with:

default-admin user
username: Viktor
password: 123

default-nonAdmin user
username: Skurt
password: 123

# Creators
- [Kristóf Vörösváczki](https://github.com/krstf456) 
- [Lisa Bengtsson](https://github.com/lisa-bee)
- [Louise Bäckström](https://github.com/LouiseBackstrom)
- [Oskar Lindblad](https://github.com/ozckarr)
- [Viktor Ödman](https://github.com/solkatt)
