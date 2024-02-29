import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GameplayCardInterface } from "./GameplayCard.interface";
import {
	CardContainer,
	PlayersGrid,
	ServerInfo,
	StatusText,
	Title,
} from "./GameplayCard.style";

export const GameplayCard: FC<GameplayCardInterface> = ({
	_id,
	title,
	players,
	created,
	status,
}) => {
	const navigate = useNavigate();

	dayjs.extend(relativeTime);

	const handleOnClick = () => {
		navigate(`../board/${_id}`, { replace: true });
	};

	return (
		<CardContainer onClick={handleOnClick}>
			<Title>{title}</Title>
			<ServerInfo>
				<StatusText>{status}</StatusText>
				<span>
					Created:
					<br />
					{dayjs(created).fromNow()}
				</span>
			</ServerInfo>
			<PlayersGrid>
				{players.map((player) => (
					<span>{player.username}</span>
				))}
			</PlayersGrid>
		</CardContainer>
	);
};
