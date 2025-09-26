import styled, { ThemedStyledProps } from 'styled-components';


const Wrapper = styled.div`
height: 400px;
border: 1px solid rgb(22 86 69 / 99%);
border-radius: 2px;
`;

const StyledBentoCard = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  height: 60%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
    
    ${(props: StyledButtonProps) => props.type === 'digital-garden' && `
        background-color: #4a5568;
        color: #fff;
        &:hover {
            background-color: #718096;
        }
    `}

    ${(props: StyledButtonProps) => props.type === 'about-me' && `
        background-color: #f6f7f8ff;
        color: #2d3748;
        &:hover {
            background-color: #d5e1ddff;
        }
    `}

    ${(props: StyledButtonProps) => props.type === 'projects' && `
        background-color: #4a5568;
        color: #fff;
        &:hover {
            background-color: #718096;
        }
    `}
`;

interface IconDivProps {
    type: string;
}

const IconDiv = styled.div<IconDivProps>`
    width: 240px;
    height: 40%;
    background-repeat: no-repeat;

    ${(props: IconDivProps) => props.type === 'digital-garden' && `
        background-image: url('/assets/holding-pen.svg');
    `}

    ${(props: IconDivProps) => props.type === 'about-me' && `
        background-image: url('/assets/person.svg');
    `}
    ${(props: IconDivProps) => props.type === 'projects' && `
        background-image: url('/assets/hand-coding.svg');

    `}

  `;

type BentoCardProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  type: string;
};

const BentoCard = ({ title, subtitle, buttonText, type }: BentoCardProps) => {
  return (
    <Wrapper>
      <IconDiv type={type}>
      </IconDiv>
    <StyledBentoCard className={type}>
      <div>
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
      </div>
      <div>
        <StyledButton type={type}>
          {buttonText}
        </StyledButton>
      </div>
    </StyledBentoCard>
    </Wrapper>
  );
}

export default BentoCard;