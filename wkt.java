11     /** The SRID regular expression. */
12     public static final String SRID_REGEX = "SRID[\\s]*=[\\s]*([0-9]+)[\\s]*;";
13  
14     /** The WKT regular expression. */
15     public static final String WKT_REGEX = "((((MULTI)?(POINT|LINESTRING|POLYGON)|GEOMETRYCOLLECTION)Z?M?)[\\s]*[(].*[)])";
16  
17     /** The PostGIS EWKT regular expression. */
18     public static final String EWKT_REGEX = "(" + SRID_REGEX + "[\\s]*)?" + WKT_REGEX;
