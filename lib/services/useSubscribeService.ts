import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "lib/constants";
import { ApiEndpoints } from "lib/utils/apiEndpoints";

type GetSubscribersCount = {
  early_access_count: number;
};

type PostSubscriber = {
  email: string;
};

export default function useSubscribeService() {
  const [usersCount, setUsersCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(false);

  async function suscribeUser(payload: any) {
    setIsLoading(true);
    try {
      const response = await axios.post<PostSubscriber>(
        `${API_URL}${ApiEndpoints.SUBSCRIBERS_API}`,
        {
          ...payload,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      if (response?.data?.email) {
        getSubscribersCount();
      }
      setIsLoading(false);
      return response;
    } catch (error) {
      toast.error("Sometheing went wrong. Unable to subscribe");
    }
    setIsLoading(false);
  }

  async function getSubscribersCount() {
    setIsUserLoading(true);
    setUsersCount(0);
    try {
      const repsonse = await axios.get<GetSubscribersCount>(
        `${API_URL}${ApiEndpoints.SUBSCRIBERS_API}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );
      setIsUserLoading(false);
      if (repsonse.status !== 200) return;
      if (!repsonse.data) return;
      setUsersCount(repsonse?.data?.early_access_count);
    } catch (error) {
      toast.error("Sometheing went wrong. Unable to fetch subscription count");
    }
    setIsUserLoading(false);
  }

  return {
    isLoading,
    isUserLoading,
    usersCount,
    suscribeUser,
    getSubscribersCount,
  };
}
