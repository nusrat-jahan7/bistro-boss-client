import { useQuery } from "@tanstack/react-query";
import client from "../../api";

const AllUsers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: () => client.get("/users").then(({ data }) => data),
  });

  return (
    <div>
      <div className="flex justify-evenly mt-8 font-bold">
        <h1 className="text-3xl"> All Users: {users.length} </h1>
        <h1 className="text-3xl"> Total Price: </h1>
        <button className="btn bg-yellow-600 text-white">pay</button>
      </div>
    </div>
  );
};

export default AllUsers;
