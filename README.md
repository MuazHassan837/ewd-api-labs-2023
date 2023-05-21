# ewd-api-labs-2023
# Assignment 2 - Web API.

Name: Syed Muaz Hassan


## Installation Requirements
DevContainer config can be accessed via .devcontainer folder

```cmd
git clone https://github.com/MuazHassan837/ewd-api-labs-2023
```
followed by installation
```bat
npm install
```

## API Configuration
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
DATABASE_URL=mongodb://localhost:27017/movies_db
JWT_SECRET_KEY=ilikecake
```

## API Design & Features

http://localhost:8080/api-docs/#/

<img width="1085" alt="image" src="https://github.com/MuazHassan837/ewd-api-labs-2023/assets/113602921/b188d0db-30e4-4e5b-9c0a-882f67500dca">
<img width="1087" alt="image" src="https://github.com/MuazHassan837/ewd-api-labs-2023/assets/113602921/8e8e2975-6017-4bda-af3d-b18edbf1ff17">

## Security and Authentication
Protected routes

/reviews/form

/movies/upcoming

/movies/favourites

## Testing

Test via postman and Talend API Tester

<img width="1030" alt="image" src="https://github.com/MuazHassan837/ewd-api-labs-2023/assets/113602921/f85fd8c8-c526-4a83-906e-5ebd9c0c6210">
<img width="757" alt="image" src="https://github.com/MuazHassan837/ewd-api-labs-2023/assets/113602921/d8090212-4b57-4604-9ff5-02001b17c13e">


## Integrating with React App

Repo: https://github.com/MuazHassan837/labMoviesApp/tree/main/moviesApp

~~~Javascript
export const GetFavouritesAPI = async (id, token) => {
  try {
    const response = await fetch(`/api/accounts/${id}/favourites`, {
      headers: {
        'token' : `${token}`
      },
      method: 'get'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
~~~
