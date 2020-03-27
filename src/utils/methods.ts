import { checkPolygonLineIntersection, checkPolygonInPolygonIntersection } from "./gemoetry";

interface IMarker{
    lat: number,
    lng: number,
}

export const download = (content:BlobPart , fileName: string, contentType:string): void => {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
   }
   
 export const fromObjectToValues = (object:Object):any =>{
    return Object.values(object);
 }
 export const fromObjectArrToValuesArr = (objectArr:Object[]):any =>{
     const arr:any = [];
     for(let obj of objectArr) {
        arr.push(fromObjectToValues(obj));
     }
     return arr;
 }
 export const createLine  = (start:Object,end:Object)=>{
     const startPoint = fromObjectToValues(start);
     const  endPoint = fromObjectToValues(end);
    return [startPoint,endPoint];
 }
 export const isLineIntersectPolygon = (line:number[], path: IMarker[]) : boolean =>{
     const polygon = fromObjectArrToValuesArr(path);
    return checkPolygonLineIntersection(line,polygon);

 }
 export const isPolygonInPolygon = (oldPath: IMarker[], newPath: IMarker[]) : boolean => {
     const newPolygon = fromObjectArrToValuesArr(newPath);
     const oldPolygon = fromObjectArrToValuesArr(oldPath);
     console.log(oldPolygon,newPolygon)
     return checkPolygonInPolygonIntersection(oldPolygon, newPolygon);
 }