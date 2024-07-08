const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

function processUserObject(userObject) {
  foo(userObject.test); 

  // random code to pad out example
  function manipulateObject(obj) {
    obj.tempValue = "temporary";
    console.log("Temporary value set:", obj.tempValue);
  }

  function useTestField(obj) {
    console.log("Test field is 'foo'.");
  }

  manipulateObject(userObject);

  userObject.test2 = "foobar"; 

  useTestField(userObject);

  try {
    eval(userObject); // SINK
  } catch (error) {
    console.log("Error evaluating user input:", error);
  }

  return userObject;
}

app.post("/submit", (req, res) => {
  // SOURCE
  const userInput = req.body.userInput; 

  if (userInput !== "foo" && userInput !== "0") {


    processUserObject(userInput);

    res.send("Input processed.");
  } else {
    res.send("Input is either empty or equal to zero.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
