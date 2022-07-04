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
    background: black;
`;

const Form = styled.form`
    height: 100%;
    width: 100%;
    background: green;
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
    width: 200px;
    height: 35px;
    background: red;
    color: white;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    place-content: center;
    place-items: center;
`;

const Contact = () => {
    return (
        <>
            <Wrapper>
                <Heading>Get in touch</Heading>
            </Wrapper>
            <ContactWrapper>
                <MessageWrapper>
                    <h1 style={{ margin: 0 }}>Got a project to talk about?</h1>
                    <h2>or wanna say hi?</h2>
                </MessageWrapper>
                <FormWrapper>
                    <Form>
                        <Submit>Shoot ⚡</Submit>
                    </Form>
                </FormWrapper>
            </ContactWrapper>
        </>
    );
};

export default Contact;
