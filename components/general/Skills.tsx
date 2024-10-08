import React from "react";
import styles from "./styles.module.scss";
import { Row, Text, Col, Grid } from "@nextui-org/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
import { SkillsCard } from "../ui/SkillsCard";
import { useRouter } from "next/router";

export const Skills = (props: { props: {} }) => {
	const { ref, inView } = useInView();
	const data = props.props;
	const { locale } = useRouter();

	if (!data)
		return (
			<Row className={styles.WorkContainer}>
				<Text color="black" size={30}>
					Loading...
				</Text>
			</Row>
		);

	const newData: any = data;
	return (
		<Row className={styles.WorkContainer} id={locale == "en" ? "Skills" : "Habilidades"}>
			<Col css={{ padding: "0" }}>
				<Row justify="center">
					<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={2}>
						<Text
							ref={ref}
							h2
							className={`${styles.border}
                    
                    `}
						>
							{locale == "en" ? "Skills" : "Habilidades"}
						</Text>
					</AnimationOnScroll>
				</Row>
				<Row justify="center">
					<Grid.Container gap={4} css={{ width: "100%" }} justify="center">
						{newData.records.map((d, idx) => (
							<Grid xs={6} sm={4} md={3} lg={3} xl={2} key={idx} justify="center">
								<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={2}>
									<SkillsCard image={d.image} language={d.language} />
								</AnimationOnScroll>
							</Grid>
						))}
					</Grid.Container>
				</Row>
			</Col>
		</Row>
	);
};
