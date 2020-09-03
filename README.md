# Who-Won-backend
Simple Express and MongoDB based API used to query series for WhoWon project.
Note: Only hockey and baseball are currently up between years of 1999-2019

To use API:

GET https://who-won-backend.herokuapp.com/getSeries

## Query Parameters: baseball, hockey, football, soccer, golf, basketball
Will request series from that sport if it is set to true

## Examples

1. Get series from only baseball from years 2003-2017 inclusive:

GET https://who-won-backend.herokuapp.com/getSeries?baseball=true
body: 
{
  "min": "2003",
  "max": "2017"
}

2. Get series from only baseball and hockey any years

GET https://who-won-backend.herokuapp.com/getSeries?baseball=true&hockey=true

