import React, { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchData();
  }, [url])
  return [response, loading, error]
}



