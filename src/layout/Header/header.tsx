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
            Каталог страниц
          </Typography>
          <Stack>
            <NavLink to={ROUTES.HOME} onClick={CloseMenu}>
              Главная
            </NavLink>
            <NavLink to={ROUTES.INFO} onClick={CloseMenu}>
              Информация
            </NavLink>
            <NavLink to={ROUTES.NEWS} onClick={CloseMenu}>
              Новости
            </NavLink>
            <NavLink to={ROUTES.OFFERS} onClick={CloseMenu}>
              Акции
            </NavLink>
            <NavLink to={ROUTES.SERVICE_CENTER} onClick={CloseMenu}>
              Услуги СЦ
            </NavLink>
            <NavLink to={ROUTES.IT_SERVICE} onClick={CloseMenu}>
              IT услуги
            </NavLink>
            <NavLink to={ROUTES.SKUD} onClick={CloseMenu}>
              Видеонаблюдение/Умный дом/Системы оповещения
            </NavLink>
            <NavLink to={ROUTES.PRINT_3D} onClick={CloseMenu}>
              3D печать
            </NavLink>
            <NavLink to={ROUTES.OWN_PRODUCTS} onClick={CloseMenu}>
              Собственные товары
            </NavLink>
            <NavLink to={ROUTES.PRICE_LIST} onClick={CloseMenu}>
              Прайс-лист
            </NavLink>
            <NavLink to={ROUTES.DELIVERY} onClick={CloseMenu}>
              Доставка (Логистика)
            </NavLink>
            <NavLink to={ROUTES.GUARANTEE} onClick={CloseMenu}>
              Гарантии
            </NavLink>
            <NavLink to={ROUTES.GOV_PURCHASES} onClick={CloseMenu}>
              Гос. закупки
            </NavLink>
            <NavLink to={ROUTES.FZ_44_223} onClick={CloseMenu}>
              44 и 223 ФЗ
            </NavLink>
            <NavLink to={ROUTES.DISPOSAL} onClick={CloseMenu}>
              Утилизация
            </NavLink>
            <NavLink to={ROUTES.USEFUL_TIPS} onClick={CloseMenu}>
              Полезные советы
            </NavLink>
            <NavLink to={ROUTES.PARTNERSHIP} onClick={CloseMenu}>
              Партнёрство
            </NavLink>
            <NavLink to={ROUTES.CERTIFICATES} onClick={CloseMenu}>
              Сертификаты
            </NavLink>
          </Stack>
        </Box>
      </Modal>
    </header>
  );
}

export default Header;
