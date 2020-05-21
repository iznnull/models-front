import AppBar from "../src/components/appBar"


describe("A suite", function() {

  var React;
  var Utils;  

  beforeAll(() => {
    React = require("react");
    Utils = require("react-dom/test-utils");
    AppBar = require("../src/components/appBar/index");
});

  it("contains spec with an expectation", function() {
    console.log(true)
    expect(true).toBe(true);
  });
 
  it('Name is the expected', () => {
    var component;

    var element = React.createElement(        
      AppBar,
      {}
    );

    expect(true).toBe(true);

    component = Utils.renderIntoDocument(element);
    console.log(component);

  });
});