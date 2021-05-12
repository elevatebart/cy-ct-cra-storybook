import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react";
import * as stories from "./MyInput.stories";

// compile the "Primary" story with the library
const { Primary, Empty } = composeStories(stories);

it("Should not display a cross when empty", () => {
  // and mount the story using @cypress/react library
  mount(<Empty />);

  // then run our tests
  cy.get("svg").should("not.be.visible");
});

it("Should show a cross when not empty", () => {
  mount(<Empty />);

  // then run our tests
  cy.get("input").type("aaa");
  cy.get("svg").should("be.visible");
});

it("Should empty the field when clicking the cross", () => {
  // and mount the story using @cypress/react library
  mount(<Primary />);

  // then run our tests
  cy.get("svg").click();
  cy.get("input").then((i) => expect(i.val()).to.be.empty);
});
