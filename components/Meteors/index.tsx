import styled, { keyframes } from 'styled-components';

const meteor_ = keyframes`
0% { 
    transform: rotate(215deg) translateX(0);
     opacity: 1;
    }

70% { 
    opacity: 1 
}

100% {
    transform: rotate(215deg) translateX(-500px);
    opacity: 0;
  }
`;

const Item = styled.span`
    position: absolute;
    top: 70%;
    box-shadow: 0 0 0 1px #ffffff10;
    border-radius: 9999px;
    transform: rotate(250deg);
    animation: ${meteor_} 5s linear infinite;
    left: 40%;
    width: 0.125rem;
    height: 0.125rem;

    :before {
        position: absolute;
        top: 70%;
        content: '';
        transform: translateY(70%);
        width: 50px;
        height: 1px;
        background-image: linear-gradient(to right, #64748b, transparent);
    }
`;

const Meteors = () => {
    const meteors_ = new Array(15).fill(true);
    return (
        <>
            {meteors_.map((el, idx) => (
                <Item
                    key={idx}
                    style={{
                        top:
                            Math.floor(Math.random() * (0.8 + 0.9) + -50) +
                            'px',
                        left:
                            Math.floor(Math.random() * (800 - -11000) + -1500) +
                            'px',
                        animationDelay: Math.random() * (0.5 - 0.2) + 0.2 + 's',
                        animationDuration:
                            Math.floor(Math.random() * (20 - 2) + 2) + 's',
                    }}
                />
            ))}
        </>
    );
};

export default Meteors;
