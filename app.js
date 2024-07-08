const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function processUserObject(userObject) {
    foo(userObject.test); 

    // random code to pad out example
    function manipulateObject(obj) {
        obj.tempValue = "temporary";
        console.log("Temporary value set:", obj.tempValue);
    }

    function useTestField(obj) {
        if (obj.test === "foo") {
            console.log("Test field is 'foo'.");
            obj.test = "bar";
        } else {
            console.log("Test field is not 'foo'.");
        }
    }

    manipulateObject(userObject);

    userObject.test2 = "foobar";

    useTestField(userObject);

    function setTest2(obj) {
        obj.test3 = "foobar2";
    }

    setTest2(userObject);

    try {
        eval(userObject); // SINK
    } catch (error) {
        console.log('Error evaluating user input:', error);
    }

    return userObject;
}

app.post('/submit', (req, res) => {
    const userInput = req.body.userInput; // SOURCE

    if (userInput !== 'foo' && userInput !== '0') { // Showing unnecessary if statements

        processUserObject(userInput);

        res.send('Input processed.');
    } else {
        res.send('Input is either empty or equal to zero.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
