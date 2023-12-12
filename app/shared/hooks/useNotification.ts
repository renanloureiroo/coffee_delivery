import { NotificationsContext } from "../../context/";
import { useContext } from "react";

export const useNotification = () => {
  const context = useContext(NotificationsContext);

  return context;
};
