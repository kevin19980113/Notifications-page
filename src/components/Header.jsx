import { useContext, useState } from "react";
import { NotificationsContext } from "../context/NotificationContext.jsx";

export default function Header() {
  const { notifications, setAllRead, setAllUnread } =
    useContext(NotificationsContext);
  const [isAllRead, setIsAllRead] = useState(false);

  function handleAllRead() {
    setAllRead();
    setIsAllRead(!isAllRead);
  }

  function handleAllUnread() {
    setAllUnread();
    setIsAllRead(!isAllRead);
  }

  const unReadNumber = notifications.filter(
    (notificaion) => !notificaion.read
  ).length;

  return (
    <header className="header">
      <div className="notificaions-container">
        <h1>Notifications</h1>
        <h3 className="number-notifications">{unReadNumber}</h3>
      </div>

      <button
        className="Mark-button"
        onClick={isAllRead ? handleAllUnread : handleAllRead}
      >
        {isAllRead ? "Mark all as unread" : "Mark all as read"}
      </button>
    </header>
  );
}
