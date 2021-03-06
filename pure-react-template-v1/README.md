# 

## pure react template - v1 
##### Prerequisites: nodejs, npm, yarn are already installed.

##### Create necessary files for the projects:
- **yarn init** or **npm init** => generate package.json which includes basic information, such as name, version, author, license, etc.
- create a folder named **public** and add a file named **index.html** under it.
- create a folder named **src** and add a file named **index.js** under it.
- [optional] set up a web server **live-server** by using **yarn add [global] live-server** or **npm install [-g] live-server**.
- set up Babel locally
    - run **yarn add babel-cli babel-preset-react babel-preset-env** to add these two to the dependency-list in package.json to allow JSX to be complied automatically. Meanwhile, **node_modules** and **yarn.lock** are added. The concrete specification can be found in [Babel Plugins](https://babeljs.io/docs/plugins/). 
    - add a new file **.babelrc** and configre babel presets/plugins in it.
<br>
:exclamation::exclamation::exclamation: Babel has on its own no functionality, which means Babel is a compiler that is not going to complie anything by default. Therefore, various plugins and presets need to be added to reach the compilation goal.
- set up Webpack: run **yarn add webpack** to add webpack locally.
    - add a file **webpack.config.js** under the project root folder and define a simple configuration in this file according to the [configuraiton template](https://webpack.js.org/concepts/configuration/).
    - install **babel-loader** and configure it in the file to handle JSX.
    - [optional] install **webpack-dev-server** and configure it in **webpack.config.js**.
    - add a file **.babelrc** under the project root folder to specify the babel presets and plugins.

<br>
:exclamation::exclamation::exclamation: Webpack is an asset bundler which allows us to bundle all the stuff that makes up applications and the applied 3rd-Party libraries into a single JavaScript.


