module.exports = function () {
  return function ({ addComponents }) {
    const buttons = {
      ".brikit": {
        padding: "1rem",
        borderRadius: ".5rem",
        borderColor: "white",
        fontWeight: "1000",
      },
      ".brikit-blue": {
        backgroundColor: "blue",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#2779bd",
        },
      },
      ".brikit-red": {
        backgroundColor: "red",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#cc1f1a",
        },
      },
    };

    addComponents(buttons);
  };
};
