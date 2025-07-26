import styled, { keyframes } from "styled-components";
import { colors, shadows, device } from '../../styles/themes';

const Container = styled.div`
    position: absolute;
    height: 100vh;
    inset: 0;
    flex-direction: row;
    justify-content: center;
    display: none;

     @media ${device.laptop} {
        display: inline-flex;
    }
`;

const BackgroundContainer = styled.div`
    position: absolute;
    inset: 0;
    display: inline-flex;
    justify-content: center;
`;

const Shape1 = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 9999px;
    position: relative;
    background-color: rgb(0 215 175);
    opacity: 0.5;
    filter: blur(90px);
    right: 60%;
    top: 700%;
`;

const Shape2 = styled.div`
    width: 380px;
    height: 380px;
    border-radius: 9999px;
    position: relative;
    background-color: ;
    opacity: 0.5;
    filter: blur(90px);
    top: 4%;
    left: -60%;
`;

const Shape3 = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 9999px;
    position: relative;
    background-color: rgb(0 215 175);
    opacity: 0.5;
    filter: blur(90px);
    left: 80%;
    top: 30%;
`;


const Shape4 = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 9999px;
    position: relative;
    background-color: rgb(0 215 175);
    opacity: 0.5;
    filter: blur(90px);
    top: -67%;
`;

const Gradient = () => {
    return (
        <Container>
            <BackgroundContainer>
                <Shape1 />
                <Shape2 />
                {/* <Shape3 /> */}
                <Shape4/>
            </BackgroundContainer>
        </Container>
    );
};

export default Gradient;
