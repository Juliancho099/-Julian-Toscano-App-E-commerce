import styled from "styled-components";

export const ButtonLink = styled.a`
	cursor: pointer;
	color: #333;
	text-decoration: none;
	font-size: 1rem;
	transition: all 0.5s ease;

	&:hover {
		text-decoration: underline;
		transition: all 0.5s ease;
	}
`;