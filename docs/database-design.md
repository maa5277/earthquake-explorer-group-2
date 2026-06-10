# Database Design

## earthquakes

- earthquakeId
- magnitude
- date
- latitude
- longitude
- location
- country
- continent
- depth
- tsunami
- alert
- significance

Indexes:
- text index on location
- 2dsphere index on coordinates

## comments

- commentId
- earthquakeId
- username
- comment
- createdAt
