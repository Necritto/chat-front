import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import authStore from "stores/AuthStore/AuthStore";
import socketManager from "services/SocketManager";

const GetUser = ({ token }: { token: string }) => {
  useEffect(() => {
    socketManager.onSocketConnectionAvailable(() =>
      authStore.getCurrentUser(token).then(() => authStore.getDataForCurrentUser()),
    );
  }, [token]);

  return <></>;
};

export default observer(GetUser);
