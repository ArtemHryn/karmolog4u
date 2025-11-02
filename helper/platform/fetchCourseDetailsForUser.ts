import { base_url } from "@helper/consts";

export const fetchCourseDetailsForUser = async (token: string, id: string) => {
  const res = await fetch(`${base_url}/user/education/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Помилка завантаження курсу');
  }
  return res.json();
};