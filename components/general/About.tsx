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
							Sobre Mi
						</Text>
					</AnimationOnScroll>
				</Row>
				<Row justify="center">
					<Text className={styles.aboutText} color="black">
						Soy un Desarrollador Front End con experiencia freelance en
						distintos proyectos, tanto publicos como otros que no, busco
						acentarme en un empresa y crecer como profesional. Soy una persona
						muy apasionado por el estudio y mi mejora constante de
						conocimientos, dia a dia estudio para poder progresar y brindar
						mejores servicios. Se desarrollarme muy bien en diferentes areas de
						trabajo y tengo una excelente capacidad en la resolucion de
						problemas. Busco continuar aprendiendo y desenvolverme mas en el
						mundo de la programacion.
					</Text>
				</Row>
				<Row
					css={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Text
						h2
						color="black"
						css={{
							marginLeft: "30px",
							borderBottom: "3px solid grey",
							width: "200px",
						}}
					>
						{" "}
						Mis Datos
					</Text>
					<Text
						h2
						color="black"
						css={{
							marginRight: "30px",
							borderBottom: "3px solid grey",
						}}
						className={styles.downloadText}
					>
						{" "}
						Clickear para descargar
					</Text>
				</Row>

				<div className={styles.curriculumContainer}>
					<Row>
						<Col>
							<ul className={styles.aboutData}>
								<li>
									<i></i>
									<strong>Cumpleaños:</strong>
									<p>27 Nov 1999</p>
								</li>
								<li>
									<i></i>
									<strong>Telefono:</strong>
									<p>+54 351 7895201</p>
								</li>
								<li>
									<i></i>
									<strong>Ciudad:</strong>
									<p>La Falda, Cordoba, Argentina</p>
								</li>
								<li>
									<i></i>
									<strong>Edad:</strong>
									<p>22 Años</p>
								</li>
							</ul>
						</Col>
						<Col>
							<ul className={styles.aboutData}>
								<li>
									<i></i> <strong>Grado:</strong>
									<p>Jr</p>
								</li>
								<li>
									<i></i> <strong>Email:</strong>
									<p>agustin.cordoba.work@gmail.com</p>
								</li>
								<li>
									<i></i> <strong>Freelance:</strong>
									<p>Disponible!</p>
								</li>
							</ul>
						</Col>
					</Row>

					<Col className={styles.btnCurriculum}>
						<Text
							h2
							color="black"
							css={{
								marginLeft: "30px",
								borderBottom: "3px solid grey",
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
				</div>
			</Col>
		</Row>
	);
};
