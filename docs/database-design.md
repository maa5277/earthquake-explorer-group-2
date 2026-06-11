# Earthquake Database Design

## Collection: earthquakes

{
  _id,
  time,
  place,
  status,
  tsunami,
  significance,
  data_type,
  magnitude,
  state,
  longitude,
  latitude,
  depth,
  date
}

## Planned Indexes

### Text Search
place
state

### Geospatial Search
latitude
longitude

## Collection: comments

{
  _id,
  earthquakeId,
  username,
  comment,
  createdAt
}
