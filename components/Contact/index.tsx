import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';
import Pattern from '../../public/assets/pattern.svg';

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
    }

    @media ${device.laptop} {
        background: url(${Pattern.src});
        width: 50%;
        padding: 0;
        place-content: normal;
        place-items: normal;
    }
`;

const Text = styled.div`
    width: 100%;
    height: 100%;
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
    padding-inline: 10px;

    @media ${device.laptop} {
        padding-left: 50px;
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
            width: 250px;
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
    @media ${device.laptop} {
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
                    <Form method="post" action="/api/contact">
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            autoComplete="name"
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            required
                            type="email"
                            name="email"
                            autoComplete="name"
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            required
                            id="message"
                            name="message"
                            autoComplete="name"
                        />
                        <Submit>Shoot ⚡</Submit>
                    </Form>
                </FormWrapper>
            </ContactWrapper>
        </>
    );
};

export default Contact;
