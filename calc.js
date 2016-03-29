/**
 * Created by Uzer on 29.03.2016.
 */
var View = require ('./view');
var view = new View();

function Calculator () {

    this.OnClickSum = function() {
        var a = view.get('#number1');
        var b = view.get('#number2');
        console.log("a,b", a,b);

        var result = a + b;

        view.set('#result', result);
        return result;
    }

}

module.exports = Calculator;

