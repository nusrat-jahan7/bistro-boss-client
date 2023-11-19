import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import client from "../api";
import { AuthContext } from "../context/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: () =>
      client.get(`/carts?email=${user.email}`).then(({ data }) => data),
  });
  return [cart, refetch];
};

export default useCart;
