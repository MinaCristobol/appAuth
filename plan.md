
- app
------ models
---------- user.js 	<!-- our user model -->
------ routes.js 	<!-- all the routes for our application -->
- config
------ auth.js 		<!-- will hold all our client secret keys (facebook, twitter, google) -->
------ database.js 	<!-- will hold our database connection settings -->
------ passport.js 	<!-- configuring the strategies for passport -->
- views
------ index.ejs 	<!-- show our home page with login links -->
------ login.ejs 	<!-- show our login form -->
------ signup.ejs 	<!-- show our signup form -->
------ profile.ejs 	<!-- after a user logs in, they will see their profile -->
- package.json 		<!-- handle our npm packages -->
- server.js 		<!-- setup our application -->


Requirements
http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local

 Express is the framework.
 Ejs is the templating engine.
 Mongoose is object modeling for our MongoDB database.
 Passport stuff will help us authenticating with different methods.
 Connect-flash allows for passing session flashdata messages.
 Bcrypt-nodejs gives us the ability to hash the password. I use bcrypt-nodejs instead of bcrypt since it is easier to set up in windows.


Auto Refreshing: By default, node doesn’t automatically refresh our server every time we change files. To do that we’ll use nodemon. Just install with: npm install -g nodemon and use with: nodemon server.js
** This command doesn't work straight out of the box.  It works with just `npm install nodemon` but not `npm install -g nodemon`.  
** Had to use: `sudo npm install -g nodemon` as root user.

** Need to set up a mongoDB database at: https://modulus.io/

** Needed to install modulus globally to access my data base.  Currently have an account with minacristobol@gmail.com

** Doesn't specify on modulus site what a "connection url" is, but does say, "project url is: spatulaappauth-31108.onmodulus.net"


Problem with viewing the app so far... Tomcat is running on my local host: http://localhost:8080/ and I do not see the node auth homepage that was created in views/index.ejs. Furthermore there is a continued problem from running nodemon and server.js.  App has crashed again but for different reason. This time there is an errror line 72 of events.js.  Issue is, I can't seem to find this file and I certainly don'y remeber changing it.  Isen't `throw er` usually `throw err;`  ?
