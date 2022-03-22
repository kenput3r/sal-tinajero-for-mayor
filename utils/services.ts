import axios from 'axios';

const postKlaviyoContact = async (email: string, fName: string, lName: string) => {
  const data = { email, fName, lName };
  const res = await axios.post('/api/createKlaviyoContact', data);
  return res;
};

export default postKlaviyoContact;
