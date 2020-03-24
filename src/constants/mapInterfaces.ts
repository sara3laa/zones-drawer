export interface IPostion {
    lat: number;
    lng: number;
}
export interface IZone {
    points: IPostion [];
    name :  string[];
    color:  string; // for now
}