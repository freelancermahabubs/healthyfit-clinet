export const addClass = async (classesData) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/class`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(classesData),
  });
  const data = await res.json();
  return data;
};
