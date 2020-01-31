# fuzzy-octo-engine
This application is using Angular8; nodeJS REST API; C#.NET Web API.

###### Please follow deployment steps to setup project to your local

1. Go to C: drive `cd C:`
2. Create TFS folder and go to TFS folder `mkdir TFS && cd TFS`
3. Clone git code on TFS folder 
`git clone https://github.com/tusharbudhe0302/fuzzy-octo-engine.git`
4. Go to folder fuzzy-octo-engine `cd  fuzzy-octo-engine`

** Please Make sure you have sample.json in your data folder **


###### Deployment Steps for C#.NET Project

1. C#.Net framework 4.5.*
2. Visual studio 2019
3. Go to directory `cd WebApplication`
4. Double click on `WebApplication.sln`
5. Make sure you have set below settings
```asp
    <appSettings>
  <add key="dataPath" value="C:\TFS\fuzzy-octo-engine\data\sample.json"></add>
    </appSettings>
```
6. Press F5 to run project.
 
###### Deployment Steps for NodeJS REST API  

1. [Install NodeJS ](https://nodejs.org/en/)
2. Go to directory `cd nodeJs-api`
3. `npm install`
4. `npm start`

###### Deployment Steps for Angular8  

1. [Install NodeJS ](https://nodejs.org/en/)
2. Go to directory `cd payments-ng`
3. npm install
4. go to environment.ts Copy Base URL C#.Net Project and NodeJS Project and Paste it here.
``` javascript
chshap_api_url: "http://localhost:63517/api",
nodejs_api_url: "http://localhost:8080/api"
```
5. ng server --open
This will open project on (http://localhost:4200)


Please let me know if you have any issue.