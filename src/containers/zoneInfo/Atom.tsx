import styled from 'styled-components';
export const ZonInfoContainer = styled.div`
width: 400px;
height: 200px;
@media(max-width:${({theme})=> theme.mobile}){
    width: 300px;
    height: 100px;
 }
`;
export const InfoConatiner = styled.div`
width:90%;
height: 90%;
border: 1px solid #c3c3c3;
background-color: #ffff;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding:20px;
@media(max-width:${({theme})=> theme.mobile}){
    padding:5px;
}
`;
export const InfoItem =  styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 200px;
height: 50px
`;
export const InfoLable = styled.label`
color: #000;
`;
export const InfoInput = styled.input`
background-color: #c3c3cf;
`;
export const ColorPickerContainer= styled.div`
background-color: '#ddd';
 padding: 20px;
 width: 200px;
 height: 100px;
 @media(max-width:${({theme})=> theme.mobile}){
    width: 150px;
    height: 50px;
 }
`;
export const AddButton =  styled.button`
width: 200px;
height: 80px
text-align:center;
`;
