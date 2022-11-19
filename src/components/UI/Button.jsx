import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: transparent;
	border: 1px solid white;
	margin-left: 0.5rem;
	padding: 0.15rem 1rem;
	line-height: 1rem;
	
	color: ${(props) => props.color || 'black'};
`

const Button = ({children, color}) => {
	return (
			<StyledButton color={color}>{children}</StyledButton>
	)
}
export default Button;