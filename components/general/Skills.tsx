import React, { FC } from "react";
import { Row, Text, Col, Grid } from "@nextui-org/react";
import { FlipCard } from "../ui";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.scss";
import useSWR from "swr";
import { SkillsCard } from "../ui/SkillsCard";



type Works = {
	data?: {};
	error?: string;
};
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export const Skills: FC<Works> = () => {

	const { ref, inView } = useInView();
	const { data, error } = useSWR("/api/languajes ", fetcher);
 
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
	return (
        <Row className={styles.WorkContainer} id="Habilidades">
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
                        className={`${styles.border}
                    
                    `}
                    >
Habilidades                    </Text>
                </AnimationOnScroll>
            </Row>
            <Row justify="center">
                <Grid.Container gap={4} css={{ width: "100%" }} justify="center">
                    {newData.records.map((d, idx) => (
                        <Grid
                            xs={6}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={3}
                            key={idx}
                            justify="center"
                        >
                            <AnimationOnScroll
                                animateIn="animate__fadeIn"
                                animateOnce={true}
                                duration={2}
                            >
                                <SkillsCard
                                    image={d.image}
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