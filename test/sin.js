var sinon = require('sinon');
var should = require('should');

var View = require('../view.js');
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

describe ("test1", function(){
    it("returns the return value from the original function", function () {

        var calc = new Calculator();

        var spy = sinon.spy(calc,"OnClickSum");

        var viewSetStub = sinon.stub(view, 'set');
        var viewGetStub = sinon.stub(view, 'get');

        viewGetStub.withArgs('#number1').returns(5);
        viewGetStub.withArgs('#number2').returns(7);

        var res = calc.OnClickSum(555);

        console.log("res:", res);
        console.log("args:", spy.args);

        should(res).be.exactly(12);
        //expect(viewGetStub).called.withArguments('#result', 12); // 12 по скольку 5+7 = 12.
    });
});
