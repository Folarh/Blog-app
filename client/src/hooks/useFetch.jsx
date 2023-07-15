import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useFetch(url, method = "GET") {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  //custom POST
  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "contnet-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const fetchdata = async (fetchOptions) => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setLoading(false);
        setData(json);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setLoading(false);
          setError("could not fetch data");
        }
      }
    };

    if (method === "GET") {
      fetchdata();
    }

    if (method === "POST") {
      fetchdata(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, options, method]);
  return { data, error, loading, postData };
}
