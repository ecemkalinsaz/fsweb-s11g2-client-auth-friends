import { useEffect, useState } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/friends", {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
        setFriends(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriends();
  }, []);

  return (
    <div>
      <h1>FRIENDS LIST</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
