const express = import('express')
//exports express module (web application framework for node.js)
//I want to use Express in my code
const app = express()
//Created the variable 'app' to initialise a new Express application
//Creating express app- starting up new server?
const port = 3000
//Set port number to '3000'. apparently the application will listen to incoming requests on this port?? I dunno what that means
//server will listen to requests on port 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//set up a route to handle GET requests to root URL '/', server responds 'Hello world' text
    //() => {} callback function. 
        //'req'- request object-containing info about HTTP request
        //'res'- response object- send a response back to client
        //'res.send('Hello Wolrd!)-sends response 'Hello World!' back to client
//'app.get('/'): This says, "When someone goes to the main page..."
//'(req, res) => { ... }: This is a function that gets called when someone visits the main page.
    //'req: Short for "request". It has information about what the visitor asked for.
    //'res: Short for "response". It's what we send back to the visitor.
    //'res.send('Hello World!'): This sends back the message "Hello World!" to the visitor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//starts server??
    //'app.listen(port): Binds and listens for connections on the specified host and port WHAT DOES THIS MEAN?
    //'(port) => { ... }: A callback function that gets executed when the server starts listening
    //'console.log(Example app listening on port ${port}): Logs a message to the console indicating that the server is running and listening on the specified port.
//This part turns the server on and makes it start listening for requests on the port we set (port 3000).
//'app.listen(port): This says, "Start the server and listen on this port."
//'() => { ... }: This is a function that runs when the server starts
    //'console.log(...): This prints a message to the console so we know the server is running and which port it is using.