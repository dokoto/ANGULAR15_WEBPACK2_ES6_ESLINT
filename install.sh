echo "Installing runtime dependencies" ;
npm install babel-polyfill es6-promise file-loader angular angular-ui-router snoowrap --save
echo "Installing build dependencies" ;
npm install autoprefixer babel-core babel-eslint babel-loader babel-plugin-syntax-decorators babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy babel-plugin-transform-runtime babel-preset-es2015 babel-preset-stage-0 babel-runtime css-loader eslint eslint-loader eslint-plugin-import extract-text-webpack-plugin html-webpack-plugin json-loader node-sass postcss-loader sass-loader stats-webpack-plugin style-loader url-loader webpack webpack-dashboard webpack-dev-server yargs eslint-plugin-angular --save-dev
