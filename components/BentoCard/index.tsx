import styled, { ThemedStyledProps } from 'styled-components';

const StyledBentoCard = styled.div`
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  
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
    background-color: #4a5568;
    color: #fff;
  }

  &.about-me {
    background-color: #a0aec0;
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
    margin-top: 2rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    outline: none;
    border: none;
    transition: background-color 0.3s ease;
    
    ${(props: StyledButtonProps) => props.type === 'garden' && `
        background-color: #4a5568;
        color: #fff;
        &:hover {
            background-color: #718096;
        }
    `}

    ${(props: StyledButtonProps) => props.type === 'about' && `
        background-color: #a0aec0;
        color: #2d3748;
        &:hover {
            background-color: #a0aec0;
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

type BentoCardProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  type: string;
};

const BentoCard = ({ title, subtitle, buttonText, type }: BentoCardProps) => {
  return (
    <StyledBentoCard className={type}>
      <h3>{subtitle}</h3>
      <h2>{title}</h2>
      <div>
        <StyledButton type={type}>
          {buttonText}
        </StyledButton>
      </div>
    </StyledBentoCard>
  );
}

export default BentoCard;