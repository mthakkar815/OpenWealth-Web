import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error : unknown) => {
  let errorMsg = "Something went wrong!";

  if (axios.isAxiosError(error)) {
    // Axios error handling
    if (error.response) {
      if (error.response.status == 200) {
        errorMsg = `Error: ${error.response.data.message}`;
      } else {
        errorMsg = `Error: ${error.message}`;
      }
    } else if (error.request) {
      // Request was made, but no response was received
      errorMsg = "Network error: No response received from server.";
    } else {
      // Something happened while setting up the request
      errorMsg = `Error: ${error.message}`;
    }
  } else if (error instanceof Error) {
    // Generic JS Error (for Promises)
    errorMsg = `Error: ${error.message}`;
  } else {
    // Unhandled error type
    errorMsg = `'An unexpected error occurred.'`;
  }
  toast.error(errorMsg);
};
