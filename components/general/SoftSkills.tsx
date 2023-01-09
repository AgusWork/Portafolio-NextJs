import React from "react";
import { Row, Text, Col, Grid, Button, Container } from "@nextui-org/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.scss";

export const SoftSkills = () => {
	const { ref, inView } = useInView();

	return (
		<Row
			css={{
				backgroundColor: "#E2EAED",
				borderRadius: "20px",
				marginBottom: "20px",
			}}
			id="Habilidades blandas"
		>
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
							Habilidades blandas
						</Text>
					</AnimationOnScroll>
				</Row>
				<Row justify="center" align="center">
					<Col>
						<ul>
							<li>
								<Text className={styles.softSkillsText} color="black">
									Trabajo en equipo
								</Text>
							</li>
							<li>
								<Text className={styles.softSkillsText} color="black">
									Aprendizaje de nuevas tecnologias
								</Text>
							</li>
							<li>
								<Text className={styles.softSkillsText} color="black">
									Actitud para afrontar desafios nuevos
								</Text>
							</li>
							<li>
								<Text className={styles.softSkillsText} color="black">
									Buen trato con el cliente
								</Text>
							</li>
						</ul>
					</Col>

					<Col>
						<ul>
							<li>
								<Text className={styles.softSkillsText} color="black">
									Autonomia en mis actividades
								</Text>
							</li>
							<li>
								<Text className={styles.softSkillsText} color="black">
									Calma y accion en problemas advenientes
								</Text>
							</li>
							<li>
								<Text className={styles.softSkillsText} color="black">
									Buena capacidad de organizacion 
								</Text>
							</li>
							<li>
								<Text className={styles.softSkillsText} color="black">
									Busqueda de mejor optimizacion y SEO
								</Text>
							</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
						<Text
							h2
                            size={50}
							color="black"
							css={{
								marginLeft: "30px",
								borderBottom: "3px solid grey",
								width: "200px",
							}}
						>
							{" "}
							Idiomas
						</Text>
						<ul className={styles.aboutData}>
							<li>
								<i></i>
								<strong>Ingles(Avanzado - B2)</strong>
								<br />
								<strong>Español(Nativo)</strong>
							</li>
						</ul>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
