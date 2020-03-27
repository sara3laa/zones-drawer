import React from "react";
import {ThemeProvider}  from 'styled-components';
const theme = {
    mobile: '576px',
}
const Theme = (props: React.PropsWithChildren<any>) =>(
<ThemeProvider theme ={theme}>{props.children}</ThemeProvider>
)

export default Theme;