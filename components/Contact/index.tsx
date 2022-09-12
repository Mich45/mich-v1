import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';
import Pageclip from 'pageclip';

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
`;

const ContactWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-block: 20px;
    color: ${colors.gray.darkGray};

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const MessageWrapper = styled.div`
    background: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-inline: 10px;
    place-items: center;
    place-content: center;

    h2 {
        margin: 0;
        font-size: 24px;

        @media ${device.laptop} {
            font-size: xx-large;
        }
    }

    h3 {
        color: ${colors.gray.lightGray};
        text-align: center;
        margin: 0;
    }

    @media ${device.laptop} {
        width: 50%;
        padding: 0;
        place-content: normal;
        place-items: normal;
    }
`;

const Text = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 15px;

    p {
        font-size: 14px;

        @media ${device.tablet} {
            font-size: 16px;
        }

        @media ${device.laptop} {
            font-size: 16px;
        }
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
    padding-inline: 5px;

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
        border: 2px solid gray;
        padding: 10px;
        background: transparent;
        margin: 20px 0;
        transition: 0.3s ease-out;

        @media ${device.laptop} {
            width: 350px;
        }

        :focus {
            box-shadow: 0 4px #e86262;
            border-color: #e86262;
        }
    }
    textarea {
        height: 200px;
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        outline: none;
        border: 2px solid gray;
        resize: none;
        margin: 20px 0;
        background: none;
        transition: 0.3s ease-out;

        @media ${device.laptop} {
            width: 350px;
        }

        :focus {
            box-shadow: 0 4px #e86262;
            border-color: #e86262;
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
    background-image: linear-gradient(to bottom, #f56260, #f34030);
    box-shadow: 0px 4px #ff7979;
    color: white;
    font-family: Inter;
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
        console.log(subject, email, message);
    };

    useEffect(() => {
        // let pageclip = new Pageclip(process.env.NEXT_PUBLIC_PAGECLIP_API_KEY)
        // // Send an item up to Pageclip
        // pageclip.send({some: 'data'}).then((response: any) => {
        // console.log(response.status, response.data) // => 200, [{payload: {...}}]
        // }).then(() => {
        // // Fetch all items
        // return pageclip.fetch()
        // }).then((response: any) => {
        // console.log(response.status, response.data) // => 200, [{payload: {...}}]
        // })
    }, []);

    return (
        <>
            <Wrapper>
                <Heading>Get in touch</Heading>
            </Wrapper>
            <ContactWrapper>
                <MessageWrapper>
                    <h2>Got a project to talk about?</h2>
                    <h3>or just wanna say hi?</h3>

                    <Text>
                        <p>
                            I'm an experienced software developer looking to
                            undertake new projects and challenges.
                        </p>
                    </Text>
                </MessageWrapper>
                <FormWrapper>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            autoComplete="name"
                            onChange={(e) => setSubject(e.target.value)}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            required
                            type="email"
                            name="email"
                            autoComplete="name"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            required
                            id="message"
                            name="message"
                            autoComplete="name"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Submit>Shoot ⚡</Submit>
                    </Form>
                </FormWrapper>
            </ContactWrapper>
        </>
    );
};

export default Contact;
