import React from "react";
import styles from "./styles.module.scss";
import { Row, Text, Col, Grid } from "@nextui-org/react";
import { FlipCard } from "../ui";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
import PacmanLoader from "react-spinners/PacmanLoader";

export const Works = (props: { props: {} }) => {
	const { ref, inView } = useInView();
	const data = props.props;

	if (!data)
		return (
			<Row className={styles.WorkContainer} css={{ height: "40vh" }}>
				<PacmanLoader
					color={"yellow"}
					size={50}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</Row>
		);

	const newData: any = data;

	return (
		<Row className={styles.WorkContainer} id="Exp. Laboral">
			<Col css={{ padding: "0" }}>
				<Row justify="center">
					<AnimationOnScroll
						animateIn="animate__fadeIn"
						animateOnce={true}
						duration={2}
					>
						<Text
							ref={ref}
							h2
							size={50}
							className={`${styles.border}
						
						`}
						>
							Experiencia Laboral
						</Text>
					</AnimationOnScroll>
				</Row>
				<Row justify="center">
					<Grid.Container gap={4} css={{ width: "100%" }} justify="center">
						{newData.records.map((d, idx) => (
							<Grid
								xs={12}
								sm={12}
								md={12}
								lg={6}
								xl={4}
								key={idx}
								justify="center"
							>
								<AnimationOnScroll
									animateIn="animate__fadeIn"
									animateOnce={true}
									duration={2}
								>
									<FlipCard
										image={d.image}
										category={d.category}
										client={d.client}
										date={d.date}
										link={d.link}
										duration={d.duration}
										language={d.language}
										imagenes={d.imagenes}
										description={d.description}
									/>
								</AnimationOnScroll>
							</Grid>
						))}
					</Grid.Container>
				</Row>
			</Col>
		</Row>
	);
};
