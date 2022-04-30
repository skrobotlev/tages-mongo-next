// const withSass = require("@zeit/next-sass");
// module.exports = withSass({
//   cssLoaderOptions: {
//     importLoaders: 2,
//   },
// });
module.exports = {
  // sassOptions: {
  //   includePaths: [path._join(styles, "styles")],
  // },
  env: {
    MONGO_URI:
      "mongodb+srv://test:test@cluster0.ugvtp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};
