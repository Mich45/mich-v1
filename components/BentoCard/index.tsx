import styled, { ThemedStyledProps } from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background-color: rgb(19 21 24);

`;

const StyledBentoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    font-family: 'Neue Montreal', sans-serif;
    color: #fff;

    h3 {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        opacity: 0.75;
    }

    h2 {
        margin-top: 0.5rem;
        font-size: 1.5rem;
        font-weight: 700;
    }
`;

interface StyledButtonProps {
    type: string;
}

const StyledButton = styled.button<StyledButtonProps>`
    font-weight: 700;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    outline: none;
    border: none;
    transition: background-color 0.3s ease;

    ${(props: StyledButtonProps) =>
        props.type === 'digital-garden' &&
        `
        background-color: #4a5568;
        color: #fff;
        &:hover {
            background-color: #718096;
        }
    `}

    ${(props: StyledButtonProps) =>
        props.type === 'about-me' &&
        `
        background-color: #f6f7f8ff;
        color: #2d3748;
        &:hover {
            background-color: #d5e1ddff;
        }
    `}

    ${(props: StyledButtonProps) =>
        props.type === 'projects' &&
        `
        background-color: #4a5568;
        color: #fff;
        &:hover {
            background-color: #718096;
        }
    `}
`;

const ImageDiv = styled.div`
    position: relative;
    display: flex;

    .image-container {
        width: 100%;
        position: relative;
        overflow: hidden;
        height: 100%;
        border-radius: 0 0 16px 16px;
    }

    img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 16/12;
    }
`;

type BentoCardProps = {
    title: string;
    subtitle: string;
    buttonText: string;
    type: string;
    className?: string;
};

const BentoCard = ({
    title,
    subtitle,
    buttonText,
    type,
    ...props
}: BentoCardProps) => {
    return (
        <Wrapper className={props.className}>
            <ImageDiv>
                <div className="image-container">
                    <img
                        alt="icon"
                        src={
                            type === 'about-me'
                                ? '/assets/laptop-image.png'
                                : type === 'projects'
                                ? '/assets/working-home.jpg'
                                : '/assets/journal.png'
                        }
                    ></img>
                </div>
            </ImageDiv>
            <StyledBentoCard className={type}>
                <div>
                    <h3>{subtitle}</h3>
                    <h2>{title}</h2>
                </div>
                <div>
                    <StyledButton type={type}>{buttonText}</StyledButton>
                </div>
            </StyledBentoCard>
        </Wrapper>
    );
};

export default BentoCard;
