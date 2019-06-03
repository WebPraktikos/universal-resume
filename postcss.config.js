const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./public/*.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/.]+/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...process.env.NODE_ENV === "public" ?
      [purgecss, require("cssnano")] : []
  ]
};

