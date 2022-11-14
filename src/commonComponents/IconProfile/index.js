import { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./index.module.scss";

const StyledMenu = styled(Menu)(() => ({
  "& .MuiList-root": {
    width: 150,
  },
  "& .MuiButtonBase-root": {
    fontSize: "18px",
    fontFamily: "Arial",
    padding: " 5px 20px",
  },
}));

const IconProfile = () => {
  const user = useSelector((state) => state.auth.data);

  const name = `${user.firstName} ${user.lastName}`;

  const handleLogoutInProfile = () => {
    localStorage.clear();

    window.location.reload();
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <div>
          <div className={styles.profile} {...bindTrigger(popupState)}>
            <AccountCircle color="action" fontSize="large" />
            {name}
          </div>
          <StyledMenu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              <NavLink to={ROUTE_NAMES.PROFILE} className={styles.navlink}>
                Profile
              </NavLink>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <NavLink
                to={ROUTE_NAMES.HOME}
                className={styles.navlink}
                onClick={handleLogoutInProfile}
              >
                Logout
              </NavLink>
            </MenuItem>
          </StyledMenu>
        </div>
      )}
    </PopupState>
  );
};

export default memo(IconProfile);
