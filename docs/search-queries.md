# Planned MongoDB Queries

## Location Search

db.earthquakes.find({
    place: /Alaska/i
})

## Magnitude Search

db.earthquakes.find({
    magnitude: { $gte: 5 }
})

## Tsunami Events

db.earthquakes.find({
    tsunami: 1
})

## Most Significant Earthquakes

db.earthquakes.find()
.sort({ significance: -1 })
.limit(10)
