import { memo, useEffect } from "react";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useCart } from "../../hooks/useCart";

import { isAuthSelector } from "../../selectors";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    color: "#000",
    background: "#fed61b",
  },
}));

const IconCart = () => {
  const { cart, handleGetCartInfo } = useCart();

  const isAuth = useSelector(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      handleGetCartInfo();
    }
  }, [isAuth, handleGetCartInfo]);

  return (
    <StyledBadge badgeContent={cart.quantity === 0 ? null : cart.quantity}>
      <ShoppingCartIcon color="action" fontSize="large" />
    </StyledBadge>
  );
};

export default memo(IconCart);
