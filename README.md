![Screenshot_2](https://user-images.githubusercontent.com/89187708/130044100-5d8ca18f-67de-4229-a795-0d285d0cdd0c.png)

# RandoMovi

It is a react application that helps people to choose what movie to watch, it suggests you movies in a randomized order,
additionally, the person using this application, can specify different criteria like release date and genres based on their liking.

The application uses The Movie Database (TMDb) API which has stored thousands of different movies in their database!

### Try it out
[Link to website](https://leodangas.github.io/RandoMovi)
## Table of Contents

* [Setup](#setup)
* [Built with](#built-with)
* [Features](#features)


## Setup
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

From your command line:
```bash
# Clone this repository
$ git clone https://github.com/leodangas/RandoMovi

# Go into the repository
$ cd RandoMovi

# Install dependencies
$ npm install

# Run the app
$ npm start

# You need to get an API key [LINK](https://developers.themoviedb.org/3/getting-started/introduction)

# Define it in src/components/Movie/FetchingMovie.js and src/components/Movie.js

```

## Built with

* [React](https://reactjs.org/)
* [React-Router](https://reactrouter.com/)
* [React-Spring](https://react-spring.io/)
* [Axios](https://github.com/axios/axios)
* [SASS](https://sass-lang.com/)
* [TMDb API](https://developers.themoviedb.org/3)

## Features
### Filters
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/89187708/130057055-65f4badb-f743-49d5-91a4-68daf5e5803a.gif)

Things you can do:

* Select **genres** one by one
* Select/Deselect all **genres** instantly
* Select the **release date** (released from-released to) e.g "*1989-1995*"
* Select the movie's **rating** e.g "*Rated over 7*"
* Select the movie's **total user vote amount** e.g "*Over 10000 votes*"

The filters are stored in local storage, therefore if you leave the site and come back later, the filters are going to be saved.

### Generated Movie

![Screenshot_2](https://user-images.githubusercontent.com/89187708/130058608-32caaa70-ec2c-4ceb-9732-737c9a37375f.png)

Generated movie's page consists of:

* **Title** (Tenet)
* **Rating** (7.3)
* **Release date** (2020)
* **Length** (2 h 30 min)
* **Description**
* **Main Actors** (John David Washington, Robert Pattinson, Elizabeth Debicki)
* **Director** (Christopher Nolan)
* **Genres** (Action | Thriller | Science Fiction)
* **Trailer**

NOTE: All of this information is coming from the TMDb API, the rating may differ on other websites like IMDb

#### How it works

A http request is made to the TMDb API based on the selected filters, the given result is an array of objects with data containing the movies information and also
how many total movies were found. The movie data is received in page format, one page holds 20 different movies, therefore if more movies were found than one page
can display, we'll have to navigate through every page.

Here is where the 'randomization' comes in, we get a random page from the total page amount, generate a random number from the total movie amount in that page,
and every generated movie that we display, is stored locally, consequently the same movie won't be displayed twice *'unless filters are renewed'*, and on every click of the 'Next movie' button
a different movie will be presented. 

When all movies will be shown, user will get an alert that no more movies were found based on that criteria.
