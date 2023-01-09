import React from "react";
import { Row, Text, Col, Grid, Button, Container } from "@nextui-org/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.scss";

export const About = () => {
	const { ref, inView } = useInView();

	return (
		<Row
			css={{
				backgroundColor: "#E2EAED",
				borderRadius: "20px",
				marginBottom: "20px",
			}}
			id="Sobre Mi"
		>
			<Col css={{ padding: "0" }}>
				<Row justify="center" >
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
							Sobre Mí
						</Text>
					</AnimationOnScroll>
				</Row>
				<Row justify="center">
					<Text className={styles.aboutText} color="black">
						Soy un Desarrollador Front End con experiencia freelance en
						distintos proyectos, tanto públicos como otros que no, busco
						acentarme en un empresa y crecer como profesional. Soy una persona
						muy apasionada por el estudio y mi mejora constante de
						conocimientos, día a día estudio para poder progresar y brindar
						mejores servicios. Sé desarrollarme muy bien en diferentes áreas de
						trabajo y tengo una excelente capacidad en la resolución de
						problemas. Busco continuar aprendiendo y desenvolverme más en el
						mundo de la programacion.
					</Text>
				</Row>
			
					

					<Col className={styles.btnCurriculum}>
						<Text
								h2
								color="black"
								css={{
									margin:"auto",
									borderBottom: "3px solid grey",
									textAlign:"center"
								}}
							>
								{" "}
								Clickear para descargar
							</Text>
						
						<button>
							<a
								href={"./pdf/CurriculumVitae.pdf"}
								target="_blank"
								rel="noopener noreferrer"
								download="CurriculumVitae.pdf"
							>
								Curriculum Vitae
							</a>
						</button>
						<button>
							<a
								href={"./pdf/CurriculumVitae.pdf"}
								target="_blank"
								rel="noopener noreferrer"
								download="CurriculumVitae.pdf"
							>
								Carta de Presentacion
							</a>
						</button>
					</Col>
			</Col>
		</Row>
	);
};
