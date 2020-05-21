
describe("A suite", function() {

  var React;
  var Utils;
  var App;

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

    expect(true).toBe(true);

    component = Utils.renderIntoDocument(element);
    console.log(component);

  });
});