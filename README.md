# restaurant-page

Personal project putting into practice ES6 modules, webpack module bundler, and the npm package manager and installer.

Although the scope of this project was to build a basic website, the main purpose of the exercise was to get some practice and show my knowledge of npm and webpack.

I learned that npm was originally created for Node.js (backend), but is now also used with regards to the front-end (JavaScript). Setting up npm is what generates our package.json file and our node_modules directory. The key to understanding npm is the package.json file. Any dependency that is downloaded for a given project will be listed in the package.json file, and any other developer that I wish to share the project with does not need to be given the modules themselves, they just need the package.json file which will allow them to download and update the dependencies themselves using npm.

Webpack comes in when the obvious next step is to link the dependencies to the html file. This would normally be done in any other language by importing and exporting code, but JavaScript is a front-end language and does not have access to the filesystem. With webpack, you can use import, export, and require statements in your javascript code, which the browser cannot read. Webpack will take these original files, bundle them together, then convert this bundle into a new JavaScript file that replaces all these unreadable statements with the modules themselves. This new js file is now readable by the browser.

Steps for completing this project:

1. Set up project directory
2. Set up npm and package.json file
3. Install webpack as a new dependency with npm
4. Create src and dist directories. The dist directory should contain the html file. When webpack is run, the new output JavaScript file will be generated in the dist directory as long as I configure the webpack.config.js file. The src directory will contain all original entry files.
5. Create homepage js file that generates the homepage to the dom. Create a css file that styles it, and a fonts directory and images directory from which the homepage js file can import from
6. Create two other separate js files that will act as two different tabs (menu, and contact). Include the styling for these tabs in the original css
7. Create a fourth js file (index.js) that will import the js from the other three files, and include logic for switching from tab to tab.
8. Run webpack. The outputted main.js file should be generated in the dist directory as mentioned previously
9. Make sure github is looking for the index.html file under the dist directory for the github hosted live preview
