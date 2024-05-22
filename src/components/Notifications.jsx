import { useContext } from "react";
import { NotificationsContext } from "../context/NotificationContext";

export default function Notifications() {
  const { notifications, read } = useContext(NotificationsContext);

  function handleRead(id) {
    read(id);
  }

  return (
    <ul className="notifications">
      {notifications.map((notification) => (
        <li
          key={notification.id}
          className={`notification ${notification.read ? "" : "unread"}`}
          onClick={() => handleRead(notification.id)}
        >
          <img
            src={notification.image}
            alt={notification.userName}
            className="user-image"
          />

          <div className="notification-wrapper">
            <div className="notification-container">
              <div className="notification-content">
                <span>
                  <a className="user-name">{notification.userName}</a>
                  {notification.notificationContents}
                  <a className="event">{notification.event}</a>
                  {!notification.read && <span className="unread-mark"></span>}
                </span>
              </div>
              <p className="notification-time">{notification.time}</p>
              {notification.privateMessage !== "" && (
                <article className="private-message">
                  {notification.privateMessage}
                </article>
              )}
            </div>
            {notification.pictureToReacted && (
              <img
                src={notification.pictureToReacted}
                className="reacted-image"
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
