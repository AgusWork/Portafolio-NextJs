import React from "react";
import { Row, Text, Col, Grid } from "@nextui-org/react";
import { FlipCard } from "../ui";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.scss";
import useSWR from "swr";

type Works = {
	data?: {};
	error?: string;
};
const fetcher = (url: string) => fetch(url).then((r) => r.json());

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format

export const Works = (props) => {
	const { ref, inView } = useInView();
	const { data, error } = useSWR("/api/staticdata", fetcher);
 
	if (error) return <div>Failed to load</div>;
	//Handle the loading state
	if (!data)
		return (
			<Row className={styles.WorkContainer}>
				<Text color="black" size={30}>
					Loading...
				</Text>
			</Row>
		);

	const newData: any = data;
	// if (inView) {
	// 	console.log("inView", inView);
	// }

	return (
		<Row className={styles.WorkContainer}>
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
							Mis Proyectos
						</Text>
					</AnimationOnScroll>
				</Row>
				<Row justify="center">
					<Grid.Container gap={4} css={{ width: "100%" }} justify="center">
						{newData.records.map((d, idx) => (
							<Grid
								xs={12}
								sm={6}
								md={6}
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
