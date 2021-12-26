const Toast = {
  success: (message) => {
    return toast.show(message, {
      type: "success",
      placement: "top",
      duration: 2500,
      offset: 30,
      animationType: "slide-in",
    });
  },
  error: (message) => {
    return toast.show(message, {
      type: "danger",
      placement: "top",
      duration: 2500,
      offset: 30,
      animationType: "slide-in",
    });
  },
  warning: (message) => {
    return toast.show(message, {
      type: "warning",
      placement: "top",
      duration: 2500,
      offset: 30,
      animationType: "slide-in",
    });
  },
};

export default Toast;
