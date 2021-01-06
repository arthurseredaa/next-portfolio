import { toast } from "react-toastify";

export const showErrorMessage = (text = "Error!") =>
  toast.error(text, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
