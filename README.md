# Blog - Frontend

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#dependencies">Dependencies</a></li>
        <li><a href="#configuration">Configuration</a></li>
        <li><a href="#execution">Execution</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

This project is a simple frontend application of a blog, [click here](https://github.com/laryssacarvalho/blog-backend) to access the backend repository.

The user has to authenticate in order to access/manage the posts. There are 3 user roles: Public, Writer and Editor.

## Built With

Here are the main frameworks/libraries used on this project.

* [Angular](https://angular.io/)
* [Bootstrap](https://getbootstrap.com)
* [Font Awesome](https://fontawesome.com/)

I chose Angular because it's the frontend framework I have the most experience with.

## Getting Started
There are two ways of running this project: on your machine or on a docker container. The latter one is easier if you have Docker installed. 

### Dependencies

The API is deployed in Azure so you can use the following URL on the environment configuration: https://laryssablog.azurewebsites.net/ and not have the trouble of executing the backend application.

But you if do prefer to run the backend locally, then check the repository documentation to see how to execute it:

* [API project](https://github.com/laryssacarvalho/blog-backend)

If you are going to execute the frontend project on your machine instead of using Docker, then you will need to install these dependencies too:

* [Node.js](https://nodejs.org/en/)
* [Angular CLI](https://github.com/angular/angular-cli)

### Configuration
The only configuration is the URL of the backend API, this can be done in the _/environments/environment.ts_ or _/environments/environment.development.ts_. You don't need to change the default value unless you execute the API on another port or want to use the deployed version.

### Execution

#### On your machine

After cloning this repository you will need to execute the following commands on the root folder:

```
npm install
```
This will install all the project dependencies

```
ng serve
```
This will execute the project, just access http://localhost:4200 to view the application.

#### Using Docker

If you have Docker installed, then you only need to execute this two commands on the root folder. The first one is going to build the image using the Dockerfile on the root of the project and the second one will run a container using that image.

```
docker build -t blog-angular-image .
```

```
docker run -it --rm -p 9000:80 blog-angular-image
```

You can now access http://localhost:9000 to view the application.

#### Sample users

If you are using the API deployed in Azure, you can use the following user credentials for testing:

| Role | Email | Password |
|---|---|---|
| Public | public@public.com | public |
| Writer | writer@writer.com | writer |
| Editor | editor@editor.com | editor |
