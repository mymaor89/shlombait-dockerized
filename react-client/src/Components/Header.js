import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: "inherit",
    textDecoration: "none"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { sections } = props;
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">{t("follow")}</Button>
        <LanguageSelector />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {t("title")}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          {t("subscribe")}
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <RouterLink
            to={section.url}
            className={classes.toolbarLink}
            // color="inherit"
            key={t([`sections.${section.title}`])}
            // variant="body2"
          >
            {t([`sections.${section.title}`])}
          </RouterLink>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};
