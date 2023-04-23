import React, { Fragment } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { TabsState, Button, Icons } from "@storybook/components";
import { CookieList } from "./CookieList";

export const Actions = styled.div({
  position: "sticky",
  top: 0,
  padding: "1rem",
  display: "flex",
  gap: "1rem",
});

interface PanelContentProps {
}

const cookies = [
  {
      "domain": ".github.com",
      "expirationDate": 1699595438.68171,
      "hostOnly": false,
      "httpOnly": false,
      "name": "_octo",
      "path": "/",
      "sameSite": "lax",
      "secure": true,
      "session": false,
      "value": "test",
      "id": 1
  }
]

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent: React.FC<PanelContentProps> = () => (
  <TabsState
    initial="cookiesList"
    backgroundColor={convert(themes.normal).background.hoverable}
  >
    
    <div
      id="cookiesList"
      title="Cookies">
      <Fragment>
        <Actions>
          <Button secondary small>
            <Icons icon="delete" />
            Clear Cookies
          </Button>
          <Button secondary small>
            <Icons icon="add" />
            Add Cookie
          </Button>
          <Button secondary small>Import Cookies</Button>
          <Button secondary small>Export Cookies</Button>
        </Actions>
        <CookieList cookies={cookies} />
      </Fragment>
    </div>
  </TabsState>
);
