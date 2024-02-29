import { useEffect, useState } from "react";
import { GameplayCard } from "../../components/GameplayCard/GameplayCard";
import { GameplayCardInterface } from "../../components/GameplayCard/GameplayCard.interface";
import { useAppSelector } from "../../store/hooks";
import { Wrapper } from "../../styles/commonStyles";

export const GameplaysList = () => {
	const { token } = useAppSelector((state) => state.auth);
	const [gameplays, setGameplays] = useState<GameplayCardInterface[]>([]);

	useEffect(() => {
		const getGameplays = async () => {
			const response = await fetch("http://localhost:8080/gameplay/all", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			try {
				const responseData = await response.json();

				if (response.ok) {
					setGameplays(responseData);
				}
			} catch (error) {
				console.log("Error while fetching gameplays.", error);
			}
		};

		getGameplays();
	}, []);

	console.log("ALL GAMEPLAYS", gameplays);

	return (
		<Wrapper>
			{gameplays.map((gameplay, index) => (
				<GameplayCard
					_id={gameplay._id}
					title={gameplay.title || "Gameplay " + (index + 1)}
					players={gameplay.players}
					created={gameplay.created}
					status={gameplay.status}
				/>
			))}
		</Wrapper>
	);
};
