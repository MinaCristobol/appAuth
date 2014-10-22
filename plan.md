
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
