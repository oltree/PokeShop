import { PropTypes } from "prop-types";

import CustomPaginationActionsTable from "../OrdersHistory";
import Spinner from "../../../../commonComponents/Spinner";

import ProfileImage from "../../../../static/images/ProfileImage.png";

import styles from "./index.module.scss";

const ProfileLayout = ({
  userInfo,
  orders,
  isLoading,
  onNavigateOrderHistoryDetail,
}) => {
  const userName = `${userInfo.firstName} ${userInfo.lastName}`;

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Spinner color="yellow" />
      ) : (
        <>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={ProfileImage} alt="pokenon" />
          </div>

          <div className={styles.personalInfoContainer}>
            <h2 className={styles.title}>Personal Information</h2>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <p className={styles.field}>Name</p>
                <p className={styles.field}>Email</p>
                <p className={styles.field}>Gender</p>
                <p className={styles.field}>Telephone Number</p>
              </div>

              <div className={styles.info}>
                <p>{userName}</p>
                <p>{userInfo.email}</p>
                <p>{userInfo.gender}</p>
                <p>{userInfo.phone}</p>
              </div>
            </div>

            <h2 className={styles.subtitle}>Recent Order History</h2>

            <div className={styles.orderHistoryContainer}>
              {orders?.length ? (
                <CustomPaginationActionsTable
                  orders={orders}
                  onNavigateOrderHistoryDetail={onNavigateOrderHistoryDetail}
                />
              ) : (
                <div>You have no order history</div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

ProfileLayout.propTypes = {
  userInfo: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    gender: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  orders: PropTypes.arrayOf(PropTypes.shape),
  isLoading: PropTypes.bool.isRequired,
  onNavigateOrderHistoryDetail: PropTypes.func.isRequired,
};

ProfileLayout.defaultProps = {
  orders: null,
};

export default ProfileLayout;
