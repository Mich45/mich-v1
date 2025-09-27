import styled, { ThemedStyledProps } from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
    border: 1px solid rgb(22 86 69 / 99%);
    border-radius: 2px;
`;

const StyledBentoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
    padding: 2rem;
    font-family: 'Neue Montreal', sans-serif;

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

    &.digital-garden {
        background-color: rgb(19 21 24);
        color: #fff;
    }

    &.about-me {
        background-color: rgb(8 211 193);
        color: #2d3748;
    }

    &.projects {
        background-color: #2d3748;
        color: #fff;
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

const IconDiv = styled.div`
    height: 40%;
    z-index: -1;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

type BentoCardProps = {
    title: string;
    subtitle: string;
    buttonText: string;
    type: string;
    className?: string;
};

const BentoCard = ({ title, subtitle, buttonText, type, ...props }: BentoCardProps) => {
    return (
        <Wrapper className={props.className}>
            <IconDiv>
                <Image
                    alt="icon"
                    width={340}
                    height={175}
                    src={
                        type === 'about-me'
                            ? '/assets/person.svg'
                            : type === 'projects'
                            ? '/assets/hand-coding.svg'
                            : '/assets/holding-pen.svg'
                    }
                ></Image>
            </IconDiv>
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
