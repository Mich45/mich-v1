import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/themes';

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    margin: 20px 0;
`;

const ContactWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-block: 20px;
`;

const MessageWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    place-items: center;
    flex-direction: column;
`;

const FormWrapper = styled.div`
    width: 50%;
    height: 100%;
`;

const Form = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
        font-weight: bold;
    }

    input {
        width: 250px;
        height: 40px;
        border-radius: 4px;
        outline: none;
        border: 2px solid gray;
        background: transparent;
        margin: 20px 0;
    }
    textarea {
        height: 200px;
        width: 350px;
        border-radius: 4px;
        outline: none;
        border: 2px solid gray;
        resize: none;
        background: none;
    }
`;

const Heading = styled.h1`
    &:: before {
        content: '';
        height: 3px;
        width: 100px;
        left: -120px;
        background: #a7a7a7;
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
        background: #a7a7a7;
        display: flex;
        position: absolute;
        bottom: 20px;
        border-radius: 4px;
    }
`;

const Submit = styled.button`
    width: 150px;
    height: 40px;
    background-image: linear-gradient(to bottom, #f56260, #f34030);
    box-shadow: 0px 4px #ff7979;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    padding: 10px;
    text-align: center;
    margin-top: 30px;

    :hover {
        cursor: pointer;
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
                    <h2 style={{ margin: 0 }}>Got a project to talk about?</h2>
                    <h3>or wanna say hi?</h3>
                </MessageWrapper>
                <FormWrapper>
                    <Form>
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
