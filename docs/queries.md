# Search Queries

## Search by Place

db.earthquakes.find({
  place: /Alaska/i
})

## Search by Magnitude

db.earthquakes.find({
  magnitude: { $gte: 5 }
})

## Search by State

db.earthquakes.find({
  state: "Alaska"
})

## Search by Tsunami

db.earthquakes.find({
  tsunami: 1
})

## Top Significant Earthquakes

db.earthquakes.find()
.sort({ significance: -1 })
.limit(10)
# Search Queries

Keyword Search:
- Alaska
- California
- Japan

Magnitude Search:
- Magnitude >= 5
- Magnitude >= 7

Geospatial Search:
- Earthquakes within a radius of a location
