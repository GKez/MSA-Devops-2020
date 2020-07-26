# MSA-Devops-2020
This is a simple movie search web app that is deployed on Microsoft Azure for phase 1 of MSA 2020.  
This Web App uses the API from https://www.themoviedb.org/documentation/api to show movie title, image and description of movies related to their search.  

The Web App has been deployed here: https://devops-msa-2020.azurewebsites.net/

# Pipelines  
**Build Pipeline**  
When triggered this pipeline will install Node.js and npm. It will then build the app and zip the files.  
I have added a secret variable for my API key which is used in a script to safely output the API key to a .env file.  
I have enabled continuous deployment to create releases on new commits to develop and master branches.

**Release Pipeline**  
I have enable continuous deployment to deploy releases to Azure from master branch commits only.