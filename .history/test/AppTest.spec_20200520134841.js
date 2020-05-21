
describe("A suite", function() {

  var React;
  var Utils;
  var MyClasses;

  beforeAll(() => {
    React = require("react");
    Utils = require("react-dom/test-utils");
    App = require("../src/App");
});

  it("contains spec with an expectation", function() {
    console.log(true)
    expect(true).toBe(true);
  });

  it('Name is the expected', () => {
    var component;

    var element = React.createElement(
       
    );

    expect(function () {
      component = Utils.renderIntoDocument(<App {...props}/>);
    }).not.toThrow();

  });
});