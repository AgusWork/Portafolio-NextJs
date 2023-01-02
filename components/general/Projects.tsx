import React from "react";
import { Row, Text, Col, Grid } from "@nextui-org/react";
import styles from "./styles.module.scss";
import { FlipCard } from "../ui";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
import useSWR from "swr";
import PacmanLoader from "react-spinners/PacmanLoader";

type Projects = {
	data?: {};
	error?: string;
};
const fetcher = (url: string) => fetch(url).then((r) => r.json());

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format

export const Projects = () => {
	const { ref, inView } = useInView();
	const { data, error } = useSWR("/api/projectsdata", fetcher);



	if (error) return <div>Failed to load</div>;
	//Handle the loading state
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
	// if (inView) {
	// 	console.log("inView", inView);
	// }

	return (
		<Row className={styles.WorkContainer} id="Exp. Profesional">
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
							Experiencia Profesional
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

// ${inView ? styles.borderAction : styles.border}
