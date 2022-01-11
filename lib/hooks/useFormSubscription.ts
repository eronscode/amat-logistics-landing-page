import { useState } from "react";
import { toast } from "react-toastify";
import useSubscribeService from "lib/services/useSubscribeService";

const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default function useFormSubscription() {
  const [value, setValue] = useState("");
  const { isLoading, usersCount, suscribeUser, getSubscribersCount } =
    useSubscribeService();

  function onValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit() {
    if (!value) {
      toast.error("Email field is compulsory!");
      return;
    }

    if (regex.test(value) === false) {
      toast.error("incorrect email format!");
      return;
    }
    const payload = {
      email: value,
    };
    handleSubscribeUser(payload);
  }

  async function handleSubscribeUser(payload: any) {
    try {
      const response = await suscribeUser(payload);
      if (response?.data?.email) {
        setValue("");
        toast.success("Submitted successfully");
      }
    } catch (error) {
      toast.error("Unable to subscribe");
    }
  }

  return {
    handleSubmit,
    value,
    onValueChange,
    usersCount,
    isLoading,
    getSubscribersCount,
  };
}
