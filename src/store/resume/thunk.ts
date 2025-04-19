import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
import { downloadError, downloadSuccess, startDownload } from "./resumeSlice";

export const startDownloadingResume = () => {
    return async (dispatch: AppDispatch) => {
      dispatch(startDownload());
  
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/public/resume`, {
            responseType: 'blob',
          });
    
          const blob = new Blob([response.data], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
    
          const a = document.createElement('a');
          a.href = url;
          a.download = 'resume.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          dispatch(downloadSuccess());
      } catch (error) {
        //console.log(error);
        const axiosError = error as AxiosError;

        dispatch(downloadError(axiosError?.message || ''));
      }
    };
  };
  