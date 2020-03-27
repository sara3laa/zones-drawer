const geometric = require('geometric');

export const checkPolygonLineIntersection = (line:any, polygon:any) => {
   const isIntersected =  geometric.lineIntersectsPolygon(line,polygon)
   return isIntersected;
}
export const checkPolygonInPolygonIntersection = (fPolygon:any, sPolygon:any) => {
   const isIntersected = geometric.polygonInPolygon(fPolygon , sPolygon);
   return isIntersected;
}


export const checkPolygonIntersectPolygon = (fPolygon:any, sPolygon:any) => {
   const isIntersected = geometric.polygonIntersectsPolygon(fPolygon , sPolygon);
   return isIntersected;
}
