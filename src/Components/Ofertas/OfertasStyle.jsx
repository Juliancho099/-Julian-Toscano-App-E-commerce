import styled from 'styled-components';

export const Slider = styled.div`
    position: fixed;
    max-height: 100px;
    height: 100%;
    padding: .1rem;
    margin-bottom: 6px;
    top: 0;
    z-index: 4;
	width: 100%;
    height: auto;
    margin: auto;
    overflow: hidden;
    background-color: #fc8d71;
`;

export const SliderTrack = styled.div`
	display: flex;
	animation: scroll 60s linear infinite;
	-webkit-animation: scroll 60s linear infinite;
	width: calc(500px * 6);
`;


export const Slide = styled.div`
    width: 500px;
`

export const Parrafo = styled.p`
    text-align: center;
    font-size: .8rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 3px;
    opacity: 0.8;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
`;
