import React from 'react/addons'
import App from '../src/App'

var TestUtils = React.addons.TestUtils;

describe("A suite", function() {

  var component;

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