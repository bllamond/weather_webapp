
import { getDatabase, ref, onValue } from "firebase/database";
import {database} from '../AuthContext'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../AuthContext";

 const starCountRef = ref(database, 'users/' + '/email');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

const UserInfoTable = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await auth.database().ref("users"); 
        const userDataArray = [];
        snapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val();
          userDataArray.push(data);
        });
        setUserData(userDataArray);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfoTable;
