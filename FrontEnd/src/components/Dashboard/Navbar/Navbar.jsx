import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";
import Logo from "../../../assets/Gemini_Generated_Image_7ydq27ydq27ydq27.png";

// Dummy Notification Handlers (replace with real services once ready)
const getMyNotifications = async () => ({
  data: {
    notifications: [],
    unreadCount: 0,
  },
});
const markNotificationRead = async () => {};
const markAllNotificationsRead = async () => {};

const Navbar = ({ adminName = "Super Admin", adminImg }) => {
  // ==========================================
  // Layer 1: States, Hooks & Derived Data
  // ==========================================
  const isAuthenticated = true;
  const user = { firstName: "Admin", role: "admin" };
  const logout = () => console.log("Logout clicked");

  const navigate = useNavigate();
  const notificationRef = useRef(null);

  const [notifications, setNotifications] = useState([]);
  const [notifCount, setNotifCount] = useState(0);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [loadingNotifications, setLoadingNotifications] = useState(false);

  const isBarApplicant =
    user?.role === "client" && user?.accountPurpose === "bar_applicant";

  const displayName =
    `${user?.firstName || ""} ${user?.lastName || ""}`.trim() ||
    user?.name ||
    user?.email ||
    adminName;

  // ==========================================
  // Layer 2: API Calls & Effects
  // ==========================================
  const formatDate = (value) => {
    if (!value) return "";
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  };

  const loadNotifications = async (showLoading = false) => {
    if (!isAuthenticated || !user) {
      setNotifications([]);
      setNotifCount(0);
      return;
    }

    if (showLoading) setLoadingNotifications(true);

    try {
      const response = await getMyNotifications(10);
      setNotifications(response.data?.notifications || []);
      setNotifCount(response.data?.unreadCount || 0);
    } catch (error) {
      console.error("Failed to load notifications:", error);
    } finally {
      if (showLoading) setLoadingNotifications(false);
    }
  };

  // Poll notifications every 30 seconds
  useEffect(() => {
    if (!isAuthenticated || !user) {
      setNotifications([]);
      setNotifCount(0);
      return;
    }

    loadNotifications();
    const timer = window.setInterval(() => loadNotifications(), 30 * 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isAuthenticated, user?._id, user?.id]);

  // Close notifications dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // ==========================================
  // Layer 3: Handlers & Navigation
  // ==========================================
  const handleHomeClick = () => navigate("/");
  const handleAboutClick = () => navigate("/aboutUs");
  const handleContactClick = () => navigate("/contactUs");

  const handleLawyersClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (isBarApplicant) {
      navigate("/bar-services");
      return;
    }
    if (user?.role === "bar_staff") {
      navigate("/bar-admin");
      return;
    }
    navigate("/find-lawyer");
  };

  const handleDashboardClick = () => {
    if (!isAuthenticated || !user) {
      navigate("/login");
      return;
    }

    const dashboardByRole = {
      client: isBarApplicant
        ? "/bar-services"
        : "/dashboardUser/home/user",
      lawyer: "/dashboard/home",
      admin: "/admin",
      bar_staff: "/bar-admin",
    };

    navigate(dashboardByRole[user.role] || "/");
  };

  const handleBarAreaClick = () => {
    if (!isAuthenticated) {
      navigate("/bar");
      return;
    }
    if (user?.role === "bar_staff") {
      navigate("/bar-admin");
      return;
    }
    if (user?.role === "client" && user?.accountPurpose === "bar_applicant") {
      navigate("/bar-services");
      return;
    }
    navigate("/bar");
  };

  const handleLogout = () => {
    if (logout) logout();
    navigate("/login");
  };

  const handleBellClick = async () => {
    const nextOpen = !notificationsOpen;
    setNotificationsOpen(nextOpen);
    if (nextOpen) {
      await loadNotifications(true);
    }
  };

  const handleNotificationClick = async (notification) => {
    try {
      if (!notification.isRead) {
        await markNotificationRead(notification._id);
        setNotifications((current) =>
          current.map((item) =>
            item._id === notification._id ? { ...item, isRead: true } : item
          )
        );
        setNotifCount((current) => Math.max(current - 1, 0));
      }
    } catch (error) {
      console.error("Failed to mark notification as read:", error);
    }

    setNotificationsOpen(false);
    if (notification.link) {
      navigate(notification.link);
    }
  };

  const handleMarkAllRead = async () => {
    try {
      await markAllNotificationsRead();
      setNotifications((current) =>
        current.map((notification) => ({
          ...notification,
          isRead: true,
        }))
      );
      setNotifCount(0);
    } catch (error) {
      console.error("Failed to mark all notifications as read:", error);
    }
  };

  // ==========================================
  // Layer 4: JSX
  // ==========================================
  return (
    <nav
      className={`${styles.navbar} d-flex justify-content-between align-items-center shadow-sm`}
    >
      {/* Brand Logo */}
      <div className="d-flex align-items-center">
        <Link to="/">
          <img src={Logo} alt="GoldHub" className={styles.logoImg} />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul
        className="d-flex align-items-center gap-4 m-0 p-0"
        style={{ listStyle: "none" }}
      >
        <li>
          <button
            type="button"
            onClick={handleHomeClick}
            className={styles.navButton}
          >
            Home
          </button>
        </li>

        {(!isAuthenticated ||
          (user?.role !== "bar_staff" && !isBarApplicant)) && (
          <li>
            <button
              type="button"
              onClick={handleLawyersClick}
              className={styles.navButton}
            >
              Products
            </button>
          </li>
        )}

       
        {isAuthenticated && user && !isBarApplicant && (
          <li>
            <button
              type="button"
              onClick={handleDashboardClick}
              className={styles.navButton}
            >
              Shops
            </button>
          </li>
        )}
{/* <li>
          <button
            type="button"
            onClick={handleAboutClick}
            className={styles.navButton}
          >
            Categories
          </button>
        </li> */}
        <li>
          <button
            type="button"
            onClick={handleAboutClick}
            className={styles.navButton}
          >
            About Us
          </button>
        </li>
 <li>
          <button
            type="button"
            onClick={handleContactClick}
            className={styles.navButton}
          >
            Contact Us
          </button>
        </li>
        {isAuthenticated && user ? (
          <li>
            <button
              type="button"
              onClick={handleLogout}
              className={styles.navButton}
            >
              <span>Log Out</span>
              <i className="fa-solid fa-arrow-right-from-bracket ms-2"></i>
            </button>
          </li>
        ) : (
          <li>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className={styles.navButton}
            >
              <span>Log In</span>
              <i className="fa-solid fa-right-to-bracket ms-2"></i>
            </button>
          </li>
        )}
      </ul>

      {/* Admin / Right Section */}
      <div className={styles.adminSection}>
        {isAuthenticated && user && (
          <div className="d-flex align-items-center gap-3">
            {/* Notification Bell & Dropdown */}
            <div
              className={styles.notificationWrapper}
              ref={notificationRef}
            >
              <div
                className={styles.notifIcon}
                onClick={handleBellClick}
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-bell-concierge" />
                {notifCount > 0 && (
                  <span
                    className={`${styles.badge} badge rounded-pill bg-info`}
                  >
                    {notifCount > 99 ? "99+" : notifCount}
                  </span>
                )}
              </div>

              {notificationsOpen && (
                <div className={styles.notificationDropdown}>
                  <div className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                    <h6 className="m-0 fw-bold">Notifications</h6>
                    {notifCount > 0 && (
                      <button
                        type="button"
                        className="btn btn-sm btn-link p-0 text-decoration-none"
                        onClick={handleMarkAllRead}
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>

                  <div className={styles.notificationList}>
                    {loadingNotifications ? (
                      <div className="text-center py-3 text-muted">
                        Loading...
                      </div>
                    ) : notifications.length === 0 ? (
                      <div className="text-center py-3 text-muted">
                        No new notifications
                      </div>
                    ) : (
                      notifications.map((notification) => (
                        <div
                          key={notification._id}
                          className={`p-2 mb-1 rounded ${
                            notification.isRead
                              ? "bg-light"
                              : "bg-white border"
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            handleNotificationClick(notification)
                          }
                        >
                          <div className="fw-bold small">
                            {notification.title || notification.titleKey}
                          </div>

                          <div
                            className="text-muted extra-small"
                            style={{ fontSize: "12px" }}
                          >
                            {notification.message || notification.messageKey}
                          </div>

                          <small
                            className="text-secondary d-block mt-1"
                            style={{ fontSize: "10px" }}
                          >
                            {formatDate(notification.createdAt)}
                          </small>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar & Name */}
            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold d-none d-md-block">
                {displayName}
              </span>
              {adminImg ? (
                <img
                  src={adminImg}
                  alt="admin"
                  className={styles.avatarCircle}
                />
              ) : (
                <div className={styles.avatarCircle}>
                  {displayName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;