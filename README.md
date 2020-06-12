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


# Betygskrav
Alla sidor skall vara responsiva. (G)
- Uppfylld, via Grommet
	
Arbetet ska implementeras med en React frontend och en Express backend. (G)
- Uppfylld, genom att stycka projektet i en Server/Client del

Skapa ett ER diagram och koddiagram, detta ska lämnas in vid idégodkännandet G) 
- Godkänt av lärare

Beskriv er företagsidé i en kort textuell presentation, detta ska lämnas in vid idégodkännandet (G)
- Godkänt av lärare
		 					
All data som programmet utnyttjar ska vara sparat i en Mongo-databas (produkter, beställningar, konton mm) (G)
- Uppfylld, se server

Man ska kunna logga in som administratör i systemet (G) 
- Uppfylld med hjälp av en authentication middleware
 			
Man ska kunna registrera sig som administratör på sidan, nya användare ska sparas i databasen (VG) 
- Ej uppfyllt
 			
En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG) 
- Ej uppfyllt
			
Inga Lösenord får sparas i klartext i databasen (G) 
- Uppfylld, med hjälp av kryptering med bcrypt
 										
En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen (G) 
- Uppfyllt, uppdateras via endpointen när en order skapas
 									
Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan (G) 
- Uppfyllt. I admin-delen på sidan kan admin redigera antalet i lager på alla produkter, under “All products” i admin-delen. 
 										
Administratörer ska kunna se en lista på alla gjorda beställningar (G)
- Ja, in admin, orders.	

Administratörer ska kunna markera beställningar som skickade (VG) 
- Ej uppfyllt
 										
Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera (G) 
- Uppfyllt.
		
Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori (G) 
- Uppfyllt. Vi sorterar kategorier/genrer i en dropdown menu på klienten. Genrerna sorteras via en endpoint.
			
Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten (G) 
- Uppfyllt, produkter sparas i en array i LS. 
			
En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas (G) 
- Uppfyllt. Inloggning krävs via authController. Registrering sker via frontend-sidans meny.
			
När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte (VG) 
- Ej uppfyllt
 			
Besökare ska kunna välja ett av flera fraktalternativ (G) 
- Uppfyllt. Klienten har 3 radiobuttons i checkout-flödet där user får välja mellan alternativen.
 			
Tillgängliga fraktalternativ ska vara hämtade från databasen (G) 
- Uppfyllt. 3 st fraktalternativ tillagda med POST till databasen och sedan fetchade i klienten. 
			
Administratörer ska kunna redigera vilka kategorier en produkt tillhör (VG)  
- Ej uppfyllt
 													 								
Administratörer ska kunna lägga till och ta bort produkter (VG)  
- Uppfyllt, via file upload
 							
Backendapplikationen måste ha en fungerande global felhantering (VG) 
- Uppfyllt, i handleError.js
 							
Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält (G) 
- Uppfylld. Alla delar i checkout är “required”.
