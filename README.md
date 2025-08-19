## API OVERVIEW
## Version

 ## Available Endpoints
Endpoints:Every endpoint returns and object with 'results' key. Endpoints with pages has additional keys -> 'page', 'next', 'entries'

Titles
Query parameters and model are explain below, in 'Description Of Optionals Query Parameters' and 'Description Of The Information (Models)'
a. Titles-Multiple /path:/titles
b. Titles- By List of Id's path: /x/titles-by-ids
c. Title-path: /titles/{id}

Search
Titles by Keyword
Titles by Title
Titles by Aka's

Actors
Actors
Actors By Id

Utils
Title by type
Genres
Titles Lists

## Request and Response Format 
Titles - Multiple:
path: /titles
description: returns array of titles according to filters / sorting query parameters provided
query parameters: multiple, unique query parameter 'list' that sets the collection you want to query - options available in Utils - Titles Lists
model: title

## Authentication 

