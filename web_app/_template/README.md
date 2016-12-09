![Tested](https://img.shields.io/badge/color-passing-green.svg)
# GAS Web App boilerplate
A boilterplate for [Google Apps Script](https://developers.google.com/apps-script/) web applications.

## Installation(s)
```bash
git clone https://github.com/hadrien-toma/gas.git
```

## Usage(s)
1. Create a new Google Apps Script in a Google Drive's folder of your choice.
2. Open this newly created file and create and paste the content of all files in the folder `./web_app/_template` of this repository.
3. Remove the initially create file "Code.gs".
4. Deploy this application as web application.

## Repository file system
* **gas/web_app/_template** : This folder.
  * **client_css.html** : Front-End's CSS styles.
  * **client_html.html** : Front-End's HTML.
  * **client_index.html** : Front-End's index HTML.
  * **client_js.html** : Front-End's JavaScript.
  * **LICENSE** : The license file.
  * **README.md** : This file.
  * **server_app.gs** : Back-End's functions charged of serving application.
  * **server_data.gs** : Back-End's functions charged of interacting with data.
  * **server_processings.gs** : Back-End's functions charged of processings.

## Roadmap
- [x] Push first commit.
- [ ] Write in-file comments.

## Related work

## Author(s)
* Hadrien TOMA :
  * Website : https://github.com/hadrien-toma
  * GitHub user name : hadrien-toma
  * NPM user name : @hadrien-toma
  * StackOverflow user name : Hadrien TOMA
  * Email : [toma.hadrien@gmail.com](mailto:toma.hadrien@gmail.com?Subject=About%20gas-web_app-_template)

## License(s)
* [MIT]
