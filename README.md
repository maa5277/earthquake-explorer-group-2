# Earthquake Explorer

MongoDB project for ISTE-438.

## Description

Earthquake Explorer is a web application that allows users to search and explore earthquake data stored in MongoDB. Users can search earthquake records, view results, inspect earthquake details, and perform geospatial searches.

## Team Members

* Mohamed Ahmed
* Max Murray

## Technology Stack

* MongoDB
* Node.js
* Express.js
* HTML
* CSS
* JavaScript
* GitHub

We selected MongoDB because it supports document-based storage, text search, and geospatial indexing. Node.js and Express were used to build the backend API, while HTML, CSS, and JavaScript were used for the web interface.

## Process

The earthquake dataset was downloaded from Kaggle and loaded into MongoDB on the RLES virtual machine. The dataset contains earthquake information such as location, date, magnitude, depth, latitude, and longitude. Fields were reviewed and structured to support search functionality and geospatial indexing.

A geospatial location field was created using longitude and latitude values and indexed using MongoDB's 2dsphere index.

MongoDB authentication was implemented using the required application account credentials.

## Volume

### earthquakes collection

3,445,751 documents

### comments collection

0 documents

## Variety

Example searches:

* Alaska
* California
* Japan
* Turkey
* Indonesia

Example magnitude filters:

* 5+
* 6+
* 7+

Users can search by keywords, locations, and earthquake magnitude values.

## Bells and Whistles

* Search interface with keyword support
* Earthquake detail page
* MongoDB backend API
* Geospatial search using MongoDB 2dsphere indexes
* Large dataset containing over 3 million earthquake records
* Results page with document selection functionality

## Features

* Keyword search
* Magnitude filtering
* Date filtering
* Geospatial search
* Earthquake details page
* Search results page
* Responsive web interface

## Running the Application

1. Start MongoDB on the RLES VM.
2. Start the Node.js server.
3. Open the web application in a browser.
4. Search for earthquake records and view details.

## Server Information

RLES VM IP:

172.16.1.111

