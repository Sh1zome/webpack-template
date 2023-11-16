import * as commonStyles from "../../assets/styles/common.module.scss";
import * as styles from "./header.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/logo";
import { ROUTES } from "../../routes/constants";
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [open, setOpen] = React.useState(false);
  const OpenMenu = () => setOpen(true);
  const CloseMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={commonStyles.container}>
        <nav className={styles.content}>
          <NavLink to={ROUTES.HOME}>
            <Logo />
          </NavLink>

          <div className={styles.right}>
            <IconButton
              className={styles.menu}
              aria-label="menu"
              onClick={OpenMenu}
            >
              <MenuIcon />
            </IconButton>
            {/* <NavLink to={ROUTES.INFO}>About</NavLink>
            <NavLink to={ROUTES.NEWS}>News</NavLink> */}
          </div>
        </nav>
      </div>

      <Modal
        open={open}
        onClose={CloseMenu}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <Typography variant="h6" component="h2">
            Menu
          </Typography>
          <Stack>
            <NavLink to={ROUTES.HOME} onClick={CloseMenu}>
              Home
            </NavLink>
            <NavLink to={ROUTES.INFO} onClick={CloseMenu}>
              About
            </NavLink>
            <NavLink to={ROUTES.NEWS} onClick={CloseMenu}>
              News
            </NavLink>
            <NavLink to={ROUTES.OFFERS} onClick={CloseMenu}>
              Offers
            </NavLink>
            <NavLink to={ROUTES.SERVICE_CENTER} onClick={CloseMenu}>
              Service Center
            </NavLink>
            <NavLink to={ROUTES.IT_SERVICE} onClick={CloseMenu}>
              IT Service
            </NavLink>
            <NavLink to={ROUTES.SKUD} onClick={CloseMenu}>
              SKUD
            </NavLink>
            <NavLink to={ROUTES.PRINT_3D} onClick={CloseMenu}>
              Print 3D
            </NavLink>
            <NavLink to={ROUTES.OWN_PRODUCTS} onClick={CloseMenu}>
              Own Products
            </NavLink>
            <NavLink to={ROUTES.PRICE_LIST} onClick={CloseMenu}>
              Price List
            </NavLink>
            <NavLink to={ROUTES.DELIVERY} onClick={CloseMenu}>
              Delivery
            </NavLink>
            <NavLink to={ROUTES.GUARANTEE} onClick={CloseMenu}>
              Guarantee
            </NavLink>
            <NavLink to={ROUTES.GOV_PURCHASES} onClick={CloseMenu}>
              Gov Purchases
            </NavLink>
            <NavLink to={ROUTES.FZ_44_223} onClick={CloseMenu}>
              44 and 223 FZ
            </NavLink>
            <NavLink to={ROUTES.DISPOSAL} onClick={CloseMenu}>
              Disposal
            </NavLink>
            <NavLink to={ROUTES.USEFUL_TIPS} onClick={CloseMenu}>
              Useful Tips
            </NavLink>
            <NavLink to={ROUTES.PARTNERSHIP} onClick={CloseMenu}>
              Partnership
            </NavLink>
            <NavLink to={ROUTES.CERTIFICATES} onClick={CloseMenu}>
              Certificates
            </NavLink>
          </Stack>
        </Box>
      </Modal>
    </header>
  );
}

export default Header;
