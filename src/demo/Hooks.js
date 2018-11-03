import { useState, useEffect } from "react";

const useHooks = () => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch("/api", params).then(response => {
      const { data } = data;
      setData(data);
    });
  };

  useEffect(() => {
    fetchData();
  });

  return data;
};

export default useHooks();
