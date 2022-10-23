module.exports.themes = [
  {
    name: "everforest",
    displayName: "Everforest",
    theme: {
      background: {
        default: "#2f383e", // primary background color
        success: "#d699b6", // POST request, 200 OK, parameter names
        notice: "#83c092", // PATCH request
        warning: "#e69875", // PUT request
        danger: "#e67e80", // DELETE request
        surprise: "#a7c080", // accent (Dashboard link, GET request,
        // SEND button, branch button, add plugin button)
        info: "#7fbbb3", // OPTIONS AND HEAD request
      },
      foreground: {
        default: "#d3c6aa", // primary font color
        success: "#2f383e", // secondary font color for success background
        notice: "#2f383e", // secondary font color for notice background
        warning: "#2f383e", // secondary font color for warning background
        danger: "#2f383e", // secondary font color for danger background
        surprise: "#2f383e", // secondary font color for surprise background
        info: "#2f383e", // secondary font color for info background
      },
      highlight: {
        default: "#9da9a0", // sidebar highlight color
      },
      // The styles object targets sub-components of the Insomnia application.
      styles: {
        appHeader: {
          foreground: {
            surprise: "#2f383e", // header branch button font color
          },
        },
        paneHeader: {
          foreground: {
            surprise: "#2f383e", // pane accent font color
            info: "#2f383e", // pane response font color
          },
        },
        editor: {
          foreground: {
            default: "#2f383e", // primary editor font color
            surprise: "#2f383e", // editor accent font color
            info: "#2f383e", // editor response font color
          },
        },
        dialog: {
          background: {
            default: "#404c51", // modal primary background color
          },
          foreground: {
            default: "#d3c6aa", // modal primary font color
          },
        },
      },
    },
  },
];
