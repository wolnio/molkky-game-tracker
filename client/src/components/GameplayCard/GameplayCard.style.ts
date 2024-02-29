import { styled } from "styled-components";

export const CardContainer = styled.div`
	width: 200px;
	height: 150px;
	border: solid 2px gray;
	border-radius: 5px;
	padding: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover {
		cursor: pointer;
		border-color: green;
	}
`;

export const Title = styled.h3`
	font-size: 20px;
	font-weight: 700;
	margin: 0;
`;

export const StatusText = styled.div`
	width: fit-content;
	color: green;
	background-color: lightgreen;
`;

export const ServerInfo = styled.div`
	display: flex;
	font-size: 10px;
	font-weight: 600;
`;

export const PlayersGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
	gap: 8px 5px;
`;
