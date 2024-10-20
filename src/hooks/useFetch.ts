import axios from "axios";
import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  hasError: boolean;
  error: FetchError | null;
}

interface FetchError {
  code: number;
  message: string;
}


export const useFetch = (endpoint: string) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, []);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    setLoadingState();
    try {
      const resp = await axios.get(`${apiUrl}/${endpoint}`, {
        withCredentials: true, // Incluye cookies en la solicitud
      });

      setState({
        data: resp.data,
        isLoading: false,
        hasError: false,
        error: null,
      });


    } catch (error) {
      if(axios.isAxiosError(error) && error.response){
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: {
            code: error.response.status,
            message: error.response.statusText || 'An error ocurred',
          },
        })
      }else{
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: {
            code: 500,
            message: "An unexpected error occurred",
          },
        });
      }
      
    }
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  };
};
