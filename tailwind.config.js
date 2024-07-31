/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // light mode
        "nav-light": "#F3F3F3",
        "rigt-content": "#FAFAFA",
        "card-light": "#F3F3F3",
        "text-darken": "#0B1320",
        "text-blue-light": "#33414E",
        "sidebar-light": "#F7F7F7",
        "border-light": "#CCCFD3",
        "page-lane": "#EAEEF1",
        "bottom-pane": "#F0F1F2",
        // dark mode
        "sidebar-dark": "#E8423A",
        "hover-dark": "#04465D",
        "active-dark": "#055774",
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
