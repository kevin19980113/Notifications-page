import angelaGrayImg from "./assets/avatar-angela-gray.webp";
import kimberlySmithImg from "./assets/avatar-kimberly-smith.webp";
import nathanPetersonImg from "./assets/avatar-nathan-peterson.webp";
import jacobThompsonImg from "./assets/avatar-jacob-thompson.webp";
import rizkyHasanuddinImg from "./assets/avatar-rizky-hasanuddin.webp";
import markWebberImg from "./assets/avatar-mark-webber.webp";
import annaKimImg from "./assets/avatar-anna-kim.webp";
import chessImg from "./assets/image-chess.webp";

export const notificationsData = [
  {
    userName: "Mark Webber",
    notificationContents: "reacted to your recent post",
    event: "My first Tournament today!",
    privateMessage: "",
    image: markWebberImg,
    time: "1m ago",
    read: false,
    id: Math.random() * 10,
  },
  {
    userName: "Angela Gray",
    notificationContents: "followed you",
    event: "",
    privateMessage: "",
    image: angelaGrayImg,
    time: "5m ago",
    read: false,
    id: Math.random() * 10,
  },
  {
    userName: "Jacob Thompson",
    notificationContents: "has joined your group",
    event: "Chess Club",
    privateMessage: "",
    image: jacobThompsonImg,
    time: "1 day ago",
    read: false,
    id: Math.random() * 10,
  },
  {
    userName: "Rizky Hasanuddin",
    notificationContents: "Sent you a private message",
    event: "",
    privateMessage:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    image: rizkyHasanuddinImg,
    time: "5 days ago",
    read: true,
    id: Math.random() * 10,
  },
  {
    userName: "Kimberly Smith",
    notificationContents: "commented on your picture",
    event: "",
    privateMessage: "",
    image: kimberlySmithImg,
    time: "1 week ago",
    pictureToReacted: chessImg,
    read: true,
    id: Math.random() * 10,
  },
  {
    userName: "Nathan Peterson",
    notificationContents:
      "reacted to your recent post 5 end-game startegies to increase your win rate",
    event: "",
    privateMessage: "",
    image: nathanPetersonImg,
    time: "2 weeks ago",
    read: true,
    id: Math.random() * 10,
  },
  {
    userName: "Anna Kim",
    notificationContents: "left the group",
    event: "Chess Club",
    privateMessage: "",
    image: annaKimImg,
    time: "2 weeks ago",
    read: true,
    id: Math.random() * 10,
  },
];

export default notificationsData;
