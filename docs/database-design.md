# Database Design

## earthquakes

{
  _id,
  magnitude,
  location,
  latitude,
  longitude,
  depth,
  date,
  country,
  continent,
  tsunami,
  alert,
  significance
}

Indexes:
- text index on location/country
- 2dsphere index on location

## comments

{
  _id,
  earthquakeId,
  username,
  comment,
  createdAt
}
