import { AppDispatch } from "../store";
import { downloadError, downloadSuccess, startDownload } from "./resumeSlice";

export const startDownloadingResume = () => {
    return async (dispatch: AppDispatch) => {
      dispatch(startDownload());
  
      try {
        const url = '/files/resume.pdf';
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        dispatch(downloadSuccess());
      } catch (error) {
        dispatch(downloadError('Error al descargar el CV'));
      }

    };
  };
  