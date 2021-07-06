const brandColors = {
  green: "#2b322b",
}

const systemColors = {
  blue: "#007aff",
}
module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.html", "./src/js/**/*.js"],
  },
  theme: {
    minWidth: {
      0: "0",
      popup: "350px",
      full: "100%",
    },
    extend: {
      colors: {
        // `ex` prefix will create classes like `text-ex-red`
        // Remove `ex` if you dont want prefix
        ex: {
          ...brandColors,
          ...systemColors,
        },
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["responsive", "hover", "active"],
      backdropFilter: ["hover", "focus"],
      margin: ["active"],
    },
  },
  plugins: [],
}
