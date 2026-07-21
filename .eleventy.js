const markdownIt = require("markdown-it");
const texmath = require("markdown-it-texmath");
const katex = require("katex");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
  }).use(texmath, {
    engine: katex,
    delimiters: "dollars",
    katexOptions: { throwOnError: false },
  });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("dateFormat", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return d.toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
