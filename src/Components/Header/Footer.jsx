import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { ColumnToRow, Item } from "@mui-treasury/components/flex";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import {
  SocialProvider,
  SocialLink,
} from "@mui-treasury/components/socialLink";
import { usePlainNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/plain";
import { useMoonSocialLinkStyles } from "@mui-treasury/styles/socialLink/moon";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  legalLink: {
    ...typography.caption,
    justifyContent: "center",
    color:
      palette.type === "dark"
        ? "rgba(255,255,255,0.57)"
        : palette.text.secondary,
    position: "relative",
    [breakpoints.up("sm")]: {
      "&:not(:first-of-type)": {
        "&:before": {
          content: '"|"',
          display: "block",
          position: "absolute",
          left: 0,
        },
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <Box pt={2} pb={10}>
        <ColumnToRow
          at={"md"}
          columnStyle={{ alignItems: "center" }}
          rowStyle={{ alignItems: "unset" }}
        >
          <Item grow ml={-2} shrink={0}>
            <NavMenu useStyles={usePlainNavigationMenuStyles}>
              <ColumnToRow at={"sm"}>
                <NavItem className={cx(classes.legalLink)}>
                  <SocialProvider useStyles={useMoonSocialLinkStyles}>
                    <SocialLink
                      brand={"GithubCircle"}
                      href={"https://www.github.com/fzscodes/pokemon"}
                    />
                  </SocialProvider>{" "}
                  Pokemons App
                </NavItem>
              </ColumnToRow>
            </NavMenu>
          </Item>
          <Item>
            <Box py={1} textAlign={{ xs: "center", md: "right" }}>
              <Typography
                component={"p"}
                variant={"caption"}
                color={"textSecondary"}
              >
                © Fauzia Siddique 2021 All rights reserved
              </Typography>
            </Box>
          </Item>
        </ColumnToRow>
      </Box>
    </>
  );
};

export default Footer;
