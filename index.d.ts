   export class LatLon {
      private latitude: number;
      private longitude: number;
      /**
       * Creates a point on the earth's surface at the supplied latitude / longitude
       *
       * @constructor
       * @param {Number} lat: latitude in numeric degrees
       * @param {Number} lon: longitude in numeric degrees
       * @param {Number} [rad=6371]: radius of earth if different value is required from standard 6,371km
       */
      constructor(lat: number, lon: number, rad?: number);

      /**
       * Returns the latitude of this point; signed numeric degrees if no format, otherwise format & dp
       * as per Geo.toLat()
       *
       * @param   {String} [format]: Return value as 'd', 'dm', 'dms'
       * @param   {Number} [dp=0|2|4]: No of decimal places to display
       * @returns {Number|String} Numeric degrees if no format specified, otherwise deg/min/sec
       */
      lat: (format?: 'd' | 'dm' | 'dms', dp?: 0 | 2 | 4) => number | string;

      /**
       * Returns the longitude of this point; signed numeric degrees if no format, otherwise format & dp
       * as per Geo.toLon()
       *
       * @param   {String} [format]: Return value as 'd', 'dm', 'dms'
       * @param   {Number} [dp=0|2|4]: No of decimal places to display
       * @returns {Number|String} Numeric degrees if no format specified, otherwise deg/min/sec
       */

      lon: (format?: 'd' | 'dm' | 'dms', dp?: 0 | 2 | 4) => number | string;

      /**
       * Returns a string representation of this point; format and dp as per lat()/lon()
       *
       * @param   {String} [format]: Return value as 'd', 'dm', 'dms'
       * @param   {Number} [dp=0|2|4]: No of decimal places to display
       * @returns {String} Comma-separated latitude/longitude
       */
      toString: (format?: 'd' | 'dm' | 'dms', dp?: 0 | 2 | 4) => string;

      /**
       * Returns the distance from this point to the supplied point, in km
       * (using Haversine formula)
       *
       * from: Haversine formula - R. W. Sinnott, "Virtues of the Haversine",
       *       Sky and Telescope, vol 68, no 2, 1984
       *
       * @param   {LatLon} point: Latitude/longitude of destination point
       * @param   {Number} [precision=4]: no of significant digits to use for returned value
       * @returns {Number} Distance in km between this point and destination point
       */
      distanceTo: (point: LatLon, precision?: number) => number;

      /**
       * Returns the (initial) bearing from this point to the supplied point, in degrees
       *   see http://williams.best.vwh.net/avform.htm#Crs
       *
       * @param   {LatLon} point: Latitude/longitude of destination point
       * @returns {Number} Initial bearing in degrees from North
       */
      bearingTo: (point: LatLon) => number;

      /**
       * Returns final bearing arriving at supplied destination point from this point; the final bearing
       * will differ from the initial bearing by varying degrees according to distance and latitude
       *
       * @param   {LatLon} point: Latitude/longitude of destination point
       * @returns {Number} Final bearing in degrees from North
       */
      finalBearingTo: (point: LatLon) => number;

      /**
       * Returns the midpoint between this point and the supplied point.
       *   see http://mathforum.org/library/drmath/view/51822.html for derivation
       *
       * @param   {LatLon} point: Latitude/longitude of destination point
       * @returns {LatLon} Midpoint between this point and the supplied point
       */
      midpointTo: (point: LatLon) => number;

      /**
       * Returns the destination point from this point having travelled the given distance (in km) on the
       * given initial bearing (bearing may vary before destination is reached)
       *
       *   see http://williams.best.vwh.net/avform.htm#LL
       *
       * @param   {Number} brng: Initial bearing in degrees
       * @param   {Number} dist: Distance in km
       * @returns {LatLon} Destination point
       */
      destinationPoint: (brng: number, dist: number) => LatLon;

      /**
       * Returns the point of intersection of two paths defined by point and bearing
       *
       *   see http://williams.best.vwh.net/avform.htm#Intersection
       *
       * @param   {LatLon} p1: First point
       * @param   {Number} brng1: Initial bearing from first point
       * @param   {LatLon} p2: Second point
       * @param   {Number} brng2: Initial bearing from second point
       * @returns {LatLon} Destination point (null if no unique intersection defined)
       */
      intersection: (p1: LatLon, brng1: Number, p2: LatLon, brng2: Number) => LatLon;

      /**
       * Returns the distance from this point to the supplied point, in km, travelling along a rhumb line
       *
       *   see http://williams.best.vwh.net/avform.htm#Rhumb
       *
       * @param   {LatLon} point: Latitude/longitude of destination point
       * @returns {Number} Distance in km between this point and destination point
       */
      rhumbDistanceTo: (point: LatLon) => number;

      /**
       * Returns the bearing from this point to the supplied point along a rhumb line, in degrees
       *
       * @param   {LatLon} point: Latitude/longitude of destination point
       * @returns {Number} Bearing in degrees from North
       */
      rhumbBearingTo: (point: LatLon) => Number;

      /**
       * Returns the destination point from this point having travelled the given distance (in km) on the
       * given bearing along a rhumb line
       *
       * @param   {Number} brng: Bearing in degrees from North
       * @param   {Number} dist: Distance in km
       * @returns {LatLon} Destination point
       */
      rhumbDestinationPoint: (brng: number, dist: number) => LatLon;

      /**
       * Returns the loxodromic midpoint (along a rhumb line) between this point and the supplied point.
       *   see http://mathforum.org/kb/message.jspa?messageID=148837
       *
       * @param   {LatLon} point: Latitude/longitude of destination point
       * @returns {LatLon} Midpoint between this point and the supplied point
       */
      rhumbMidpointTo: (point: LatLon) => LatLon;
   }
