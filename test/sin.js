'use strict'
var sinon = require('sinon')

class Calculator {

    static OnClickSum() {
        let a = View.get('#number1');
        let b = View.get('#number2');

        let result = a + b;

        View.set('#result', result);
    }

}

let viewSetStub = sinon.stub(View, 'set');
let viewGetStub = sinon.stub(View, 'get');

viewGetStub.withArgs('#number1').returns(5);

// тоже самое только для number2

viewGetStub.withArgs('#number2').returns(7);

// вызываем функцию

Calculator.OnClickSum()

expect(viewGetStub).called.withArguments('#result', 12); // 12 по скольку 5+7 = 12.

viewGetStub.withArgs('#number1').returns(0);
viewGetStub.withArgs('#number2').returns(0);
Calculator.OnClickSum()
expect(viewGetStub).called.withArguments('#result', 0);

viewGetStub.withArgs('#number1').returns(5);
viewGetStub.withArgs('#number2').returns(5);
Calculator.OnClickSum()
expect(viewGetStub).called.withArguments('#result', 10);
