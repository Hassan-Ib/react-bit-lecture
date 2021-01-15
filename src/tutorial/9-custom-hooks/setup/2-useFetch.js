import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const response = await fetch(url);
    const responseData = await response.json();

    // THIS will course DOM RENDERING
    setData(responseData);

    // THIS will course DOM RENDERING
    setLoading(false);
  }, [url]);
  // // THIS RUNS AFTER Dom renders
  // useEffect requires getData as depency but ordinarilly without the useCallback the getData a dependency to
  // useEffect will cause infinity loop but the usecallback help by having the dependency of url(if the)
  // url changes is the only reason for the getData to be recreated

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { loading, data };
};
