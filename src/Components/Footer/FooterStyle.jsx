import styled from "styled-components";

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 0 auto;

	height: 100%;
	width: 100%;
	background-color: #f1ede9;

	@media (width >= 768px) {
		max-height: 500px;
        justify-content: space-between;
	}
`;

export const Container = styled.div`
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;
	padding: 1rem;

	@media (width >= 768px) {
		width: 70%;
		padding: 1.6rem;
		height: 100%;
		justify-content: space-between;
        gap: 0 1rem;
		grid-template-columns: 40% 60%;
        grid-template-rows: auto auto;
		grid-template-areas:
			'descripcion menu'
			'redes redes';
	}
`;

export const DescriptionSect = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    gap : 1rem;

    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img{
            width: 50%;
            object-fit: contain;
        }
    }

    @media (width >= 768px) {
        grid-area: descripcion;
        margin-left: 20%;
    }
`;

export const MenuSect = styled.section`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    gap : 1rem;

    div{
        h3{
            font-size: 1.3rem;
            font-weight: 600;
            border-bottom: 1px solid #000;
            width: 100%;

        }
    }

    .aside{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        margin: 0 auto;

        ul{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
            margin: 0 auto;
            gap : 1rem;

            li{
                width: 100%;

                a{
                    width: 100%;
                    text-decoration: none;
                    color: #000;
                    font-size: 1.1rem;
                    font-weight: 500;
                    transition: all .1s ease-out;

                    &:hover{
                        border-bottom: 1px solid #000;
                        transition: all .1s ease-out;

                    }
                }
            }
        }

        .principal{
            margin-bottom: 1rem;
        }
    }

    @media (width >= 768px) {
        grid-area: menu;
        display: grid;
        grid-template-areas: 
        'titulo titulo'
        'aside aside';

        margin-left: 20%;

        div{
            grid-area: titulo;
            h3{
                width: 40%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.6rem;
                text-align: center;
            }
        }
        
        .aside{
            grid-area: aside;
            display: grid;
            grid-template-columns: 20% 80%;
            justify-content: space-between;
            gap: 1px;
        }
    }
`

export const RedesSect = styled.section`
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    
    svg{
        cursor: pointer;
        font-size: 1.6rem;
    }

    @media (width >= 768px) {
        grid-area: redes;
    }
`