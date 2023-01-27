import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Link,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import R4LogoBlanco from "../../assets/img/logo_r4_completo_blanco.png";
import MBLogoBlanco from "../../assets/img/logo_mb_blanco.png";
import { AccountCircle } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";

export const OnboardingNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between", padding: 0.75 }}>
          {/* Logo R4Conecta */}
          <Link component={RouterLink} to="/onboarding/main">
            <img src={R4LogoBlanco} height="50" />
          </Link>

          <Toolbar>
            {/* Botón para salir */}
            <IconButton onClick={handleMenu}>
              <AccountCircle color="secondary" />
            </IconButton>
            <Menu
              transformOrigin={{
                horizontal: "right",
              }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <LogoutIcon color="grey" />
                Cerrar sesión
              </MenuItem>
            </Menu>

            {/* Logo MiBanco Gris */}
            <Link component={RouterLink} to="/onboarding/main">
              <img src={MBLogoBlanco} height="50" />
            </Link>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
