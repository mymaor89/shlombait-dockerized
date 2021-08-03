import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useTranslation } from "react-i18next";

function Copyright() {
  const { t } = useTranslation();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © 2020 "}
      <Link color="inherit" href="https://material-ui.com/">
        {t("creators")}
      </Link>{" "}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

export default function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {t("title")}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {t("slogan")}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

// Footer.propTypes = {
//   description: PropTypes.string,
//   title: PropTypes.string
// };
