# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The API is from [dockerhub](https://hub.docker.com/r/wefoxgroup/wg-web-challenge)

## Notes
Both CRA and Docker were fighting for port:3000  
I changed the docker-compose.yaml to point the API to port:3030

## Front end

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Docker  
Pull the image from the above dockerhub repo  
`docker run --rm -p 3030:3000 wefoxgroup/wg-web-challenge`  
Or run it in the [Docker GUI](https://docs.docker.com/desktop/)
