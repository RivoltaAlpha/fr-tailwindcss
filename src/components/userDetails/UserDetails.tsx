import  { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const UserDetails= () => {
  const { name, age, email, phone } = useContext(UserContext);
// displaying the user details from the form using the userContext
  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md mt-6 mx-auto">
      <h2 className="text-2xl mb-6 text-center">User Details</h2>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Name:</strong> {name}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Age:</strong> {age}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Email:</strong> {email}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Phone Number:</strong> {phone}</p>
      </div>
    </div>
  );
};

export default UserDetails;
