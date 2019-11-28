import axios from "axios";

const fetchContacts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/contacts");

    if (response.status === 200) {
      const result = await response.data;
      return result;
    }
  } catch (error) {}
  return null;
};

export { fetchContacts };
