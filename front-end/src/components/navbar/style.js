import styled from "styled-components";


export const Div = styled.div`
height: 70px;
display: flex;
padding: 20px 36px;
box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
//background-color: ${props => props.color2 || ''}
`

export const Ul = styled.ul`
//background-color: ${props => props.color2 || ''}
`

export const Li = styled.li`
display: inline;
list-style: none;
margin-right: 2%;
white-space: nowrap;
`

export const Modal = styled.div`
position: absolute;
box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
top: 35%;
left: 45%;
z-index: 5;
`

export const Bar = styled.div`
position: absolute;
left : 87%
`

export const ModalTitle = styled.span`
margin-left: 30%;
padding-top: 50%;
text-transform: uppercase
`