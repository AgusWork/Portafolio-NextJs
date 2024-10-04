import React from "react";
import { Row, Text, Col } from "@nextui-org/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.scss";
import { useRouter } from "next/router"; 

export const About = () => {
	const { ref, inView } = useInView();
	const { locale } = useRouter(); 

	const textContent = {
		es: {
			title: "Sobre Mi",
			description:
				"Soy un Desarrollador Full Stack con fortaleza en el desarrollo Front End, tengo experiencia freelance en distintos proyectos, tanto públicos como privados para empresas, busco acentarme en una empresa y crecer como profesional. Soy una persona muy apasionada por el estudio, me encanta desafiarme y buscar nuevos logros día a día. Sé desarrollarme muy bien en diferentes áreas de trabajo, se trabajar en equipos grandes como chicos y tengo templanza a la hora de resolver problemas. Busco continuar aprendiendo y avanzar como programador para así siempre brindar mejores servicios.",
			cvTitle: "Hoja de Vida",
			cvDownload: "Curriculum Vitae",
			presentationDownload: "Carta de Presentación",
		},
		en: {
			title: "About Me",
			description:
				"I am a Full Stack Developer with a strong focus on Front End development, I have freelance experience in various projects, both public and private for companies, I am looking to settle in a company and grow as a professional. I am very passionate about learning, I love challenging myself and seeking new achievements day by day. I can adapt well to different work environments, I work well in both large and small teams, and I stay calm when solving problems. I am looking to continue learning and progressing as a programmer to always provide better services.",
			cvTitle: "Resume",
			cvDownload: "Resume",
			presentationDownload: "Cover Letter",
		},
	};

	const content = locale === "en" ? textContent.en : textContent.es;

	return (
		<Row
			css={{
				backgroundColor: "#E2EAED",
				borderRadius: "20px",
				marginBottom: "20px",
			}}
			id={content.title}
		>
			<Col css={{ padding: "0" }}>
				<Row justify="center">
					<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={2}>
						<Text ref={ref} h2 size={50} className={`${styles.border}`}>
							{content.title}
						</Text>
					</AnimationOnScroll>
				</Row>
				<Row justify="center">
					<Text className={styles.aboutText} color="black">
						{content.description}
					</Text>
				</Row>

				<Col className={styles.btnCurriculum}>
					<Text
						h2
						color="black"
						css={{
							margin: "auto",
							borderBottom: "3px solid grey",
							textAlign: "center",
							fontSize: "40px"

						}}
					>
						{content.cvTitle}
					</Text>

					<button>
						<a
							href={locale == "en" ? "./pdf/CurriculumVitaeEn.pdf" : "./pdf/CurriculumVitaeEsp.pdf"}
							target="_blank"
							rel="noopener noreferrer"
							download={locale == "en" ? "CurriculumVitaeEn.pdf" : "CurriculumVitaeEsp.pdf"}
						>
							{content.cvDownload}
						</a>
					</button>
					{/* <button>
						<a
							href={"./pdf/Presentation.pdf"}
							target="_blank"
							rel="noopener noreferrer"
							download="Presentation.pdf"
						>
							{content.presentationDownload}
						</a>
					</button> */}
				</Col>
			</Col>
		</Row>
	);
};
