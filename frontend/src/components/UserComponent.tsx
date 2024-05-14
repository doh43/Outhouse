import React, { useEffect, useState } from "react";

const UserComponent: React.FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("../actions/getCurrentUser");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUser(data.user);
        console.log("User data:", data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return <div>{user ? `Logged in as: ${user}` : "Not logged in"}</div>;
};

export default UserComponent;
