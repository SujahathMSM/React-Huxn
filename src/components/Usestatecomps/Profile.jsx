import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.name)
    // console.log(e.target.value);

    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={profile.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
