import React, { FC } from "react";
import {
	Card,
	Button,
	Col,
	Image,
	Link,
	Row,
	Grid,
} from "@nextui-org/react";
import styles from "./FlipCard.module.scss";
import LinkIcon from "@mui/icons-material/Link";

interface Props {
	image: string;
	category: string;
	client: string;
	date: string;
	duration: string;
	language: string[];
	link: string;
}

export const FlipCard: FC<Props> = ({
	image,
	category,
	client,
	date,
	duration,
	language = [],
	link,
}) => {
	return (
		<Card className={styles.flipCard}>
			<div className={styles.flipCardInner}>
				<Card.Image
					src={image}
					objectFit="fill"
					width="100%"
					className={styles.flipCardFront}
					alt={client}
				/>
				<div className={styles.flipCardBack}>
					<Col className={styles.innerFCB}>
						<ul className={styles.list}>
							<li>
								<strong>Categoria</strong>: {category}
							</li>
							<li>
								<strong>Cliente</strong>: {client}
							</li>
							<li>
								<strong>Fecha del Proyecto</strong>: {date}
							</li>
							<li>
								<strong>Duración</strong>: {duration}
							</li>
							<Row>
								<li>
									<strong>Tecnologias</strong>:{" "}
								</li>
								<Grid.Container>
									{language.map((leng, idx) => (
										<Grid key={idx} justify="center" xs={6} sm={4} lg={3}>
											<Image
												key={idx}
												src={leng}
												width={50}
												height={50}
												alt="Lenguajes de Programacion"
											></Image>
										</Grid>
									))}
								</Grid.Container>
							</Row>
						</ul>
						<Button rounded color={"gradient"} icon={<LinkIcon />}>
							Visitar<Link href={link}></Link>
						</Button>
					</Col>
				</div>
			</div>
		</Card>
	);
};
