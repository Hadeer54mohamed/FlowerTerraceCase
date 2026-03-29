import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createRating(data) {
  const res = await axios.post(`${API_URL}/api/ratings`, data);
  return res.data;
}
