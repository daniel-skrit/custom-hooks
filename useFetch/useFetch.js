import { useState, useEffect } from "react";

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    setLoadingState();
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      console.log("Cache Local");
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }
    const resp = await fetch(url);

    await new Promise((resolve) => setTimeout(resolve, 300));

    if (!resp.ok) {
      setState({
        data,
        isloading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();
    console.log(data);
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });
    localCache[url] = data;
  };

  return {
    data: state.data,
    isloading: state.isLoading,
    hasError: state.hasError,
  };
};
