# Frontend Project Deployment with Jenkins

This project is a frontend web application deployed using Jenkins. The pipeline automates the process of building, packaging, and serving the application with Node.js and Docker.

## Technologies Used

- **Node.js (v18)** - For JavaScript runtime.
- **Jenkins** - For continuous integration and deployment automation.
- **Docker** - To run the build in a containerized environment.
- **Serve** - To serve the built static files from the `dist` directory.

## Jenkins Pipeline

### Stages

1. **Package Install and Build**
   - **Docker**: Runs inside a Node.js Docker container (`node:18-alpine`).
   - **npm install**: Installs dependencies.
   - **npm run build**: Builds the application for production.
   - **serve -s dist -l 5000**: Uses the `serve` package to serve the production build on port `5000`.

### Post-build Actions

- **Success**: If the build is successful, a success message is logged.
- **Failure**: If the build fails, an error message is logged.

## Setup

1. Ensure you have Jenkins installed and configured.
2. Create a new pipeline job in Jenkins.
3. Copy the pipeline code into the Jenkinsfile of your project.
4. Set up a Docker environment on your Jenkins server to use the `node:18-alpine` image.
5. Ensure the project has a valid `package.json` file with all necessary dependencies and scripts (`npm run build` and `npm install`).

## Running the Application

Once the Jenkins pipeline has been triggered and the build completes successfully, the application will be served on port `5000`.

To access the application:
1. Open a browser.
2. Navigate to `http://<your-jenkins-server-ip>:5000`.

## Notes

- The `serve` package is used to serve the static files, ensuring the application runs as a production-ready web app.
- Docker is used to isolate the build environment, providing a consistent and reproducible environment for building the app.


