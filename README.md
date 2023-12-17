# parcels
A tiny app for managing parcels.

You can add parcel and search parcels by country and description.

The entry point to the app is in http://localhost:4200

### Run locally
To run the app locally you need to have docker installed.

```bash
docker-compose -f docker/docker-compose.yml up -d
```

Sometimes backend doesn't see db, just kill backend contaner and rerun command above.



### Dev environment set up

1) Install nodejs v20.10.0 from official web site.  https://nodejs.org/en/download
2) Instal angular cli via npm
```bash
npm install -g @angular/cli

```

### Project structure

* `backend` folder contains everything related to server side
* `frontend` folder contains fancy UI where cliets can managing their parcels
* `docker` folder contains docker related files to help in running project
