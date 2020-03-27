//@ts-nocheck
import { MarkersReducer} from './reducers';
import {ADD_MARKER,DELETE_MARKER,CLEAR_MARKERS } from './types';

describe('Markers reducer',()=> {
    it('should return the intital state',()=>{
        expect(MarkersReducer(undefined,{})).toEqual({
            markers:[]
        })
    })
    it('should add marker to Markers at MarkerState',()=>{
        expect(MarkersReducer({
            markers:[]
        },{
            type: ADD_MARKER,
            payload:{
              lat: 30.074667169198786,
              lng: 31.208524965698565,
            }

            
        })).toEqual({markers:[{
              lat: 30.074667169198786,
              lng: 31.208524965698565,
        }]})
    })
    it('shouild remover Marker from Markers at MarkersState',()=>{
        expect(MarkersReducer({
            markers:[{
                lat: 30.074667169198786,
                lng: 31.208524965698565

            },{
                lat: 33.074667169198786,
                lng: 35.208524965698565
            }]
        },{
            type: DELETE_MARKER,
            index:1,
        }

        )

        ).toEqual({markers:[{
            lat: 30.074667169198786,
            lng: 31.208524965698565,
      }]})
    });
    it('should Clear Markers',()=>{
        expect(MarkersReducer({
            markers:[{
                lat: 30.074667169198786,
                lng: 31.208524965698565

            },{
                lat: 33.074667169198786,
                lng: 35.208524965698565
            },
            {
                lat: 34.074667169198786,
                lng: 33.208524965698565

            },{
                lat: -33.074667169198786,
                lng: 54.208524965698565
            }
        ]
        },{
            type: CLEAR_MARKERS,
        }

        )

        ).toEqual({ markers:[]})

    })
});