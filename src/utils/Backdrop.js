import styled from "styled-components";
const Backdrop = () =>{
    return(
        <>
            <BackdropDiv></BackdropDiv>
        </>
    )
}
const BackdropDiv = styled.div`
    width: 20rem;
    height: 5rem;
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px);
    background-color: rgba(78, 78, 221, .5);
    border: 1px solid hsla(0, 0%, 100%, .2);
    border-radius: 50%;
    position: absolute;
    z-index: -1;
`
export default Backdrop;