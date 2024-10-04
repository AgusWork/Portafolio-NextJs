import React from "react";
import styles from "./styles.module.scss";
import { Row, Text, Col } from "@nextui-org/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router"; 

export const SoftSkills = () => {
  const { ref, inView } = useInView();
  const { locale } = useRouter(); 

  const textContent = {
    es: {
      title: "Habilidades blandas",
      skills: [
        "Trabajo en equipo",
        "Aprendizaje de nuevas tecnologías",
        "Actitud para afrontar desafíos nuevos",
        "Buen trato con el cliente",
        "Autonomía en mis actividades",
        "Calma y acción en problemas advenientes",
        "Buena capacidad de organización",
        "Búsqueda de mejor optimización y SEO"
      ],
      languages: {
        title: "Idiomas",
        english: "Inglés (Avanzado - B2 - IELTS(2024))",
        spanish: "Español (Nativo)"
      }
    },
    en: {
      title: "Soft Skills",
      skills: [
        "Teamwork",
        "Learning new technologies",
        "Attitude for facing new challenges",
        "Good customer relationship",
        "Autonomy in my tasks",
        "Calm and action in unexpected problems",
        "Good organizational skills",
        "Focus on optimization and SEO"
      ],
      languages: {
        title: "Languages",
        english: "English (Advanced - B2 - IELTS(2024))",
        spanish: "Spanish (Native)"
      }
    }
  };

  const content = locale === "en" ? textContent.en : textContent.es;

  return (
    <Row
      css={{
        backgroundColor: "#E2EAED",
        borderRadius: "20px",
        marginBottom: "20px",
		paddingInline:"5%"
      }}
      id={content.title}
    >
      <Col css={{ padding: "0" }}>
        <Row justify="center">
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOnce={true}
            duration={2}
          >
            <Text ref={ref} h2 size={50} className={`${styles.border}`}>
              {content.title}
            </Text>
          </AnimationOnScroll>
        </Row>
        <Row justify="center" align="center">
          <Col>
            <ul>
              {content.skills.slice(0, 4).map((skill, idx) => (
                <li key={idx}>
                  <Text className={styles.softSkillsText} color="black">
                    {skill}
                  </Text>
                </li>
              ))}
            </ul>
          </Col>

          <Col>
            <ul>
              {content.skills.slice(4).map((skill, idx) => (
                <li key={idx}>
                  <Text className={styles.softSkillsText} color="black">
                    {skill}
                  </Text>
                </li>
              ))}
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
                borderBottom: "3px solid grey",
                width: "200px",
              }}
            >
              {content.languages.title}
            </Text>
            <ul className={styles.aboutData}>
              <li>
                <strong>{content.languages.english}</strong>
                <br />
                <strong>{content.languages.spanish}</strong>
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
