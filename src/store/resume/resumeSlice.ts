import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ResumeState {
    isDownloading: boolean,
    error:string | null
}

// Define the initial state using that type
const initialState: ResumeState = {
    isDownloading: false,
    error:null
}

export const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
      startDownload: (state) => {
        state.isDownloading = true;
        state.error = null;
      },
      downloadSuccess: (state) =>{
        state.isDownloading = false;
      },
      downloadError:(state, action: PayloadAction<string>) =>{
        state.isDownloading = false;
        state.error = action.payload;
      },
    },
  });

export const { startDownload, downloadSuccess, downloadError } = resumeSlice.actions
export default resumeSlice;