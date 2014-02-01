mt-latlon
=========

Latitude/longitude spherical geodesy formulae &amp; scripts.


Installation
------------

    npm install mt-latlon


Usage
-----

The module exposes the LatLon class. With this class you can create LatLon
objects on which you can perform various operations.

    var LatLon = require('mt-latlon');
    var point = new LatLon(51.5136, -0.0983);

The available operations of the LatLon objects is listed below.


### Constructing the object - LatLon(lat, lon, rad)

Creates a point on the earth's surface at the supplied latitude/longitude.

- __lat__ (number) latitude in numeric degrees
- __lon__ (number) longitude in numeric degrees
- __rad__ (number, default 6371) radius of earth if different value is required from standard 6,371km

```
var point = new LatLon(51.5136, -0.0983);
```


### distanceTo(point, precision)

Returns the distance from this point to the supplied point, in km (using Haversine formula).
Source: Haversine formula - R. W. Sinnott, "Virtues of the Haversine", Sky and Telescope, vol 68, no 2, 1984.

- __point__ (LatLon) Latitude/longitude of destination point
- __precision__ (number, default 4) Number of significant digits to use for returned value


### bearingTo(point)

Returns the (initial) bearing from this point to the supplied point, in degrees.
(see http://williams.best.vwh.net/avform.htm#Crs)

- __point__ (LatLon) Latitude/longitude of destination point


### finalBearingTo(point)

Returns final bearing arriving at supplied destination point from this point; the final bearing will differ from the initial bearing by varying degrees according to distance and latitude.

- __point__ (LatLon) Latitude/longitude of destination point


### midpointTo(point)

Returns the midpoint between this point and the supplied point.
(see http://mathforum.org/library/drmath/view/51822.html for derivation)

- __point__ (LatLon) Latitude/longitude of destination point


### destinationPoint(brng, dist)

Returns the destination point from this point having travelled the given distance (in km) on the 
given initial bearing (bearing may vary before destination is reached).
(see http://williams.best.vwh.net/avform.htm#LL)

- __brng__ (number) Initial bearing in degrees
- __dist__ (number) Distance in km


### intersection(p1, brng1, p2, brng2)

Returns the point of intersection of two paths defined by point and bearing. Null is returned if no unique intersection is defined.
(see http://williams.best.vwh.net/avform.htm#Intersection)

- __p1__ (LatLon) First point
- __brng1__ (number) Initial bearing from first point
- __p2__ (LatLon) Second point
- __brng2__ (number) Initial bearing from second point


### rhumbDistanceTo(point)

Returns the distance from this point to the supplied point, in km, travelling along a rhumb line.
(see http://williams.best.vwh.net/avform.htm#Rhumb)

- __point__ (LatLon) Latitude/longitude of destination point


### rhumbBearingTo(point)

Returns the bearing from this point to the supplied point along a rhumb line, in degrees from North.

- __point__ (LatLon) Latitude/longitude of destination point


### rhumbDestinationPoint(brng, dist)

Returns the destination point from this point having travelled the given distance (in km) on the given bearing along a rhumb line.

- __brng__ (number) Bearing in degrees from North
- __dist__ (number) Distance in km


### rhumbMidpointTo(point)

Returns the loxodromic midpoint (along a rhumb line) between this point and the supplied point.
(see http://mathforum.org/kb/message.jspa?messageID=148837)

- __point__ (LatLon) Latitude/longitude of destination point


### lat(format, dp)

Returns the latitude of this point; signed numeric degrees if no format, otherwise format & dp as per Geo.toLat().

- __format__ (string, optional) Return value as `d`, `dm`, `dms`
- __dp__ (number, 0|2|4) Number of decimal places to display


### lon(format, dp)

Returns the longitude of this point; signed numeric degrees if no format, otherwise format & dp as per Geo.toLon().

- __format__ (string, optional) Return value as `d`, `dm`, `dms`
- __dp__ (number, 0|2|4) Number of decimal places to display



Copyright and license
---------------------

The original code was written by Chris Veness and can be found at
http://www.movable-type.co.uk/scripts/latlong.html. It is released under the
simple Creative Commons attribution license
(http://creativecommons.org/licenses/by/3.0/).

This project is released under the MIT license.
