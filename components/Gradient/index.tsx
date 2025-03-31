import styled, { keyframes } from "styled-components";

const one = keyframes`
    0% { left: 0px; top: 0px; }
    25% { left: -100px; top: 70px; }
    50% { left: 20px; top: 150px; }
    75% { left: 50px; top: 100px; }
    100% { left: 0px; top: 0px; }
`;

const two = keyframes`
    0% { left: 0px; top: 0px; }
    25% { left: 50px; top: 100px; }
    50% { left: 100px; top: 50px; }
    75% { left: 50px; top: 100px; }
    100% { left: 0px; top: 0px; }
`;

const Container = styled.div`
    position: absolute;
    top: 50px !important;
    inset: 0;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
`;

const BackgroundContainer = styled.div`
    position: absolute;
    inset: 0;
    display: inline-flex;
    justify-content: center;
`;

const Shape1 = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 9999px;
    position: relative;
    background-color: rgb(0 215 175);
    opacity: 0.5;
    filter: blur(90px);
    right: 50%;
    // animation: ${one} 10s infinite;
`;

const Shape2 = styled.div`
    width: 380px;
    height: 380px;
    border-radius: 9999px;
    position: relative;
    background-color: rgb(0 215 175);
    opacity: 0.5;
    filter: blur(90px);
    bottom: -34%;
    right: 40%;
    // animation: ${two} 10s infinite;
`;

const Shape3 = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 9999px;
    position: relative;
    background-color: rgb(0 215 175);
    opacity: 0.5;
    filter: blur(90px);
    // animation: ${one} 10s infinite;
`;


const Gradient = () => {
    return (
        <Container>
            <BackgroundContainer>
                <Shape1 />
                <Shape2 />
                <Shape3 />
            </BackgroundContainer>
        </Container>
    );
};

export default Gradient;
