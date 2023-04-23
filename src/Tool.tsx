import React, { memo, useCallback, useEffect } from "react";
import { useGlobals, useStorybookApi } from "@storybook/manager-api";
import { Icons, IconButton } from "@storybook/components";
import { PARAM_KEY, TOOL_ID } from "./constants";

export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();

  const isActive = globals[PARAM_KEY];

  const toggleCookies = useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: !isActive,
    });
  }, [isActive]);


  return (
    <IconButton
      key={TOOL_ID}
      active={isActive}
      title={isActive ? "Disable Cookies" : "Enable Cookies"}
      onClick={toggleCookies}
    >
      <Icons icon="database" />
    </IconButton>
  );
});
