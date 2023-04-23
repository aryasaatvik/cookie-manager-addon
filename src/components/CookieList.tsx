import React, { Fragment, useState } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { Icons, IconsProps } from "@storybook/components";
import { Cookie } from "src/types";

const ListWrapper = styled.ul({
  listStyle: "none",
  fontSize: 14,
  paddingInline: 0,
  marginInline: 0,
});

const Wrapper = styled.div({
  display: "flex",
  width: "100%",
  borderBottom: `1px solid ${convert(themes.normal).appBorderColor}`,
  "&:hover": {
    background: convert(themes.normal).background.hoverable,
  },
});

const Icon = styled(Icons)<IconsProps>({
  height: 10,
  width: 10,
  minWidth: 10,
  color: convert(themes.normal).color.mediumdark,
  marginRight: 10,
  transition: "transform 0.1s ease-in-out",
  alignSelf: "center",
  display: "inline-flex",
});

const HeaderBar = styled.div({
  padding: convert(themes.normal).layoutMargin,
  paddingLeft: convert(themes.normal).layoutMargin - 3,
  background: "none",
  color: "inherit",
  textAlign: "left",
  cursor: "pointer",
  borderLeft: "3px solid transparent",
  width: "100%",

  "&:focus": {
    outline: "0 none",
    borderLeft: `3px solid ${convert(themes.normal).color.secondary}`,
  },
});

const CookieForm = styled.form({
  display: "flex",
  flexDirection: "column",
  padding: convert(themes.normal).layoutMargin,
  paddingLeft: convert(themes.normal).layoutMargin - 3,
});

interface CookieItemProps {
  cookie: Cookie;
}

export const CookieListItem: React.FC<CookieItemProps> = ({ cookie }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Fragment>
      <Wrapper>
        <HeaderBar onClick={() => setIsExpanded(!isExpanded)} role="button">
          <Icon
            icon="arrowdown"
            color={convert(themes.normal).appBorderColor}
            style={{
              transform: `rotate(${open ? 0 : -90}deg)`,
            }}
          />
          {cookie.name}
        </HeaderBar>
      </Wrapper>
      {isExpanded && <div>
        <CookieForm>
          <label> value: </label>
          <textarea value={cookie.value} rows={5} />
          <label> domain: </label>
          <input value={cookie.domain} />
          <label> path: </label>
          <input value={cookie.path} />
          <label> expirationDate: </label>
          <input value={cookie.expirationDate} disabled />
          <label> sameSite: </label>
          <input value={cookie.sameSite} disabled />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <label> hostOnly: </label>
              <input checked={cookie.hostOnly} type="checkbox" />
            </div>
            <div>
              <label> httpOnly: </label>
              <input checked={cookie.httpOnly} type="checkbox" />
            </div>
            <div>
              <label> secure: </label>
              <input checked={cookie.secure} type="checkbox" />
            </div>
            <div>
              <label> session: </label>
              <input checked={cookie.session} type="checkbox" />
            </div>
          </div>
        </CookieForm>
      </div>}
    </Fragment>
  );
}

interface CookieListProps {
  cookies: Cookie[];
}

export const CookieList: React.FC<CookieListProps> = ({ cookies }) => (
  <ListWrapper>
    {cookies.map((cookie, idx) => (
      <CookieListItem key={idx} cookie={cookie}></CookieListItem>
    ))}
  </ListWrapper>
);
