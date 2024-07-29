/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // light mode
        "nav-light": "#F3F3F3",
        "card-light": "#F3F3F3",
        "light-dark": "#0B1320",
        // dark mode
        "sidebar-dark": "#E8423A",
        "nav-dark": "#172030",
        "card-dark": "#033446",
        "green-dark": "#279F75",
        "blue-dark": "#3AB0DB",
        "blue-secondary": "#06688C",
        "blue-light": "#B2D4E0",
        "border-color": "#3F5578",
        "dark-blue": "#141C2B",
        "card-workflow": "#0A677A",
        "text-dark": "#606D82",
        "selected-color": "#07749B",
        "text-light": "#B2D4E0",
      },
    },
  },
  plugins: [],
};
