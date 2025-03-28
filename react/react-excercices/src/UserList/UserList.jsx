import React, { Suspense, useState } from "react";
import UserInfoRow from "./UserInfoRow";
// https://randomuser.me/api/?nat=us&inc=name,picture,email&results=5&noinfo

const userData = [
  {
    name: "John Doe",
    email: "johnDoe@email.com",
    img: "https://randomuser.me/api/portraits/thumb/men/46.jpg",
  },
  {
    name: "John Doe 2",
    email: "johnDoe@email.com",
    img: "https://randomuser.me/api/portraits/thumb/women/52.jpg",
  },
  {
    name: "John Doe3",
    email: "johnDoe@email.com",
    img: "https://randomuser.me/api/portraits/thumb/men/48.jpg",
  },
];
const UserList = () => {
  const [users, setUsers] = useState(userData ?? []);

  // getList here
  // https://randomuser.me/api/?nat=us&inc=name,picture,email&results=5&noinfo

  const url =
    "https://randomuser.me/api/?nat=us&inc=name,picture,email&results=5&noinfo";
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    const getUsers = async () => {
      const usersFetched = await fetchData();
      const processedUsers = usersFetched.results.map(
        ({ name, email, picture: { medium } }) => ({
          name: `${name.first} ${name.last}`,
          email,
          img: medium,
        }),
      );
      setUsers(processedUsers);
    };

    getUsers();
  }, []);
  return (
    <>
      <h1> Super cool devs!</h1>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          minWidth: "800px",
          gap: "4px",
        }}
      >
        <Suspense fallback={<div> Loading...</div>}>
          {users.length > 3
            ? users.map((user, ind) => <UserInfoRow key={ind} {...user} />)
            : null}
        </Suspense>
      </div>
    </>
  );
};

export default UserList;
