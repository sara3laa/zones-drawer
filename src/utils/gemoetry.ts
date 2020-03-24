const geometric = require('geometric');

export const checkIntersection = (line:any, polygon:any) => {
   console.log(line,polygon);
   const isIntersected =  geometric.lineIntersectsPolygon(line,polygon)
   return isIntersected;
}