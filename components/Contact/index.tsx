import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import { colors, device } from '../../styles/themes';

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
`;

const gradient = keyframes`
0% {
background-position: 200% 50%
}

100% {
background-position: 0% 50%
}
`;

const ContactWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-block: 20px;

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const MessageWrapper = styled.div`
    background: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    h2 {
        margin: 0;
        font-size: 24px;
          color: transparent;
    background: linear-gradient(
        to right,
        rgb(83 224 173),
        rgb(45 235 187),
        rgb(83 226 197),
        rgb(141 248 212),
        rgb(94 235 168)
    );
    background-clip: text;
    background-size: 225% auto;
    -webkit-animation: ${gradient} 3s linear infinite;
    animation: ${gradient} 3s linear infinite;

        @media ${device.laptop} {
            font-size: xx-large;
        }
    }

    h3 {
        margin: 0;
    }

    @media ${device.laptop} {
        width: 50%;
        padding: 0;
        margin: 0 auto;
        place-content: normal;
        place-items: normal;
    }
`;

const FormWrapper = styled.div`
    width: 100%;
    height: 100%;

    @media ${device.laptop} {
        width: 50%;
    }
`;

const Form = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
        padding-left: 100px;
    }

    label {
        font-weight: bold;
    }

    input {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        outline: none;
        border: 2px solid ${colors.slate.textSlate};
        padding: 10px;
        background: transparent;
        margin: 20px 0;
        transition: 0.3s ease-out;

        @media ${device.laptop} {
            width: 350px;
        }

        :focus {
            box-shadow: 0 4px ${colors.green.greenPrimary};
            border-color: ${colors.green.greenPrimary};
        }
    }
    textarea {
        height: 200px;
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        outline: none;
        border: 2px solid ${colors.slate.textSlate};
        resize: none;
        margin: 20px 0;
        background: none;
        transition: 0.3s ease-out;

        @media ${device.laptop} {
            width: 350px;
        }

        :focus {
            box-shadow: 0 4px ${colors.green.greenPrimary};
            border-color: ${colors.green.greenPrimary};
        }
    }
`;

const Heading = styled.h1`
    font-size: 30px;

    @media ${device.laptop} {
        font-size: 40px;
        &:: before {
            content: '';
            height: 3px;
            width: 100px;
            left: -120px;
            background: #060f36;
            display: flex;
            position: absolute;
            bottom: 20px;
            border-radius: 4px;
        }

        &:: after {
            content: '';
            height: 3px;
            width: 100px;
            right: -120px;
            background: #060f36;
            display: flex;
            position: absolute;
            bottom: 20px;
            border-radius: 4px;
        }
    }
`;

const Submit = styled.button`
    width: 150px;
    height: 40px;
    background-image: linear-gradient(to right, rgb(67, 231, 172), rgb(45, 235, 187), rgb(83, 226, 197), rgb(46 232 186), rgb(66 231 173));
    box-shadow: rgb(14 139 93) 0px 4px;
    color: black;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    padding: 10px;
    text-align: center;
    margin-top: 30px;
    margin-inline: auto;
    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    @media ${device.laptop} {
        margin-inline: 0;
    }
    :hover {
        cursor: pointer;
        color: #322b2b;
        background-image: #f34030;
        box-shadow: none;
    }
`;

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        const postData = async () => {
            const data = {
                email: email,
                message: message,
                subject: subject,
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
            });
            return response.json();
        };

        postData().then((data) => {
            alert(data.message);
        });

        setEmail('');
        setSubject('');
        setMessage('');
    };

    useEffect(() => {}, []);

    return (
        <>
            <ContactWrapper>
                <MessageWrapper>
                    <h2>Got a project to talk about?</h2>
                    <h3>or just wanna say hi?</h3>
                </MessageWrapper>
                <FormWrapper>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="subject">Subject</label>
                        <input
                            required
                            id="subject"
                            type="text"
                            name="subject"
                            autoComplete="name"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            required
                            type="email"
                            name="email"
                            autoComplete="name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            required
                            id="message"
                            name="message"
                            autoComplete="name"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Submit
                            type="submit"
                        >
                            Shoot ⚡
                        </Submit>
                    </Form>
                </FormWrapper>
            </ContactWrapper>
        </>
    );
};

export default Contact;
