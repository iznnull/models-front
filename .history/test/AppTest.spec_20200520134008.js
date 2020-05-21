
describe("A suite", function() {

  var React;
  var Utils;
  var MyClasses;

  beforeAll(() => {
    React = require("react");
    Utils = require("react-dom/test-utils");
    MyClasses = require("../src/App");
});


  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<App name="Render"/>);
  });

  it("contains spec with an expectation", function() {
    console.log(true)
    expect(true).toBe(true);
  });
  it('Name is the expected', () => {
    expect(component.getDomNode().textContent).toMatch(/App name: Render/);
  });
});