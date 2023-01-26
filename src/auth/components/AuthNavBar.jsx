import { Box, AppBar, Toolbar, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import R4Logo from "../../assets/img/logo_r4_completo.png";
import R4LogoGris from "../../assets/img/logo_mb_gris.png";

export const AuthNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar sx={{ justifyContent: "space-between", padding: 0.75 }}>
          {/* Logo R4Conecta */}
          <Link component={RouterLink} to="/">
            <img src={R4Logo} height="50" />
          </Link>

          {/* Logo MiBanco Gris */}
          <Link component={RouterLink} to="/">
            <img src={R4LogoGris} height="50" />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
