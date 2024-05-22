/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { notificationsData } from "../data.js";

export const NotificationsContext = createContext({
  notifications: [],
  read: () => {},
  setAllRead: () => {},
  setAllUnread: () => {},
});

export default function NotificationsContextProvider({ children }) {
  const [notifications, setNotifications] = useState([...notificationsData]);

  function read(id) {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }

  function setAllRead() {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  }

  function setAllUnread() {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: false,
      }))
    );
  }

  const notificationsContext = {
    notifications: notifications,
    read,
    setAllRead,
    setAllUnread,
  };

  return (
    <NotificationsContext.Provider value={notificationsContext}>
      {children}
    </NotificationsContext.Provider>
  );
}
