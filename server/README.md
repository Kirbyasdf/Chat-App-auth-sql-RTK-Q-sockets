the server has been modified to work without a db for testing,

for login POST ("/auth/login"): it will send a token associated with a default user object 

and for authentication GET ("/auth): it will send the actual default user object, provided the token sent is valid
