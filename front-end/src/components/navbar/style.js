import styled from "styled-components";
const secondaryColor = sessionStorage.getItem('secondaryColor')

export const Div = styled.div`
height: 70px;
display: flex;
padding: 20px 36px;
box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
background-color: ${secondaryColor}
`

export const Ul = styled.ul`
background-color: ${secondaryColor}
`

export const Li = styled.li`
display: inline;
list-style: none;
margin-right: 2%;
white-space: nowrap;
`