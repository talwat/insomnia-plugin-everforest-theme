module.exports.themes = [
  {
    name: "everforest",
    displayName: "Everforest",
    theme: {
      background: {
        default: "#2D353B", // primary background color
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
        success: "#2D353B", // secondary font color for success background
        notice: "#2D353B", // secondary font color for notice background
        warning: "#2D353B", // secondary font color for warning background
        danger: "#2D353B", // secondary font color for danger background
        surprise: "#2D353B", // secondary font color for surprise background
        info: "#2D353B", // secondary font color for info background
      },
      highlight: {
        default: "#9da9a0", // sidebar highlight color
      },
      // The styles object targets sub-components of the Insomnia application.
      styles: {
        appHeader: {
          foreground: {
            surprise: "#2D353B", // header branch button font color
          },
        },
        paneHeader: {
          foreground: {
            surprise: "#2D353B", // pane accent font color
            info: "#2D353B", // pane response font color
          },
        },
        editor: {
          foreground: {
            default: "#2D353B", // primary editor font color
            surprise: "#2D353B", // editor accent font color
            info: "#2D353B", // editor response font color
          },
        },
        dialog: {
          background: {
            default: "#3D484D", // modal primary background color
          },
          foreground: {
            default: "#d3c6aa", // modal primary font color
          },
        },
      },
    },
  },
];
