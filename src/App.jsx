import Header from "./components/Header";
import Notifications from "./components/Notifications";
import NotificationsContextProvider from "./context/NotificationContext";
function App() {
  return (
    <NotificationsContextProvider>
      <Header />
      <Notifications />
    </NotificationsContextProvider>
  );
}

export default App;
