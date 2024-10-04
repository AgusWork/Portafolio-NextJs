import React, { useState } from "react";
import { Row, Text, Col, Grid, Button } from "@nextui-org/react";
import styles from "./styles.module.scss";
import FmdGoodTwoToneIcon from "@mui/icons-material/FmdGoodTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import StayCurrentPortraitTwoToneIcon from "@mui/icons-material/StayCurrentPortraitTwoTone";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useInView } from "react-intersection-observer";
import { InputUI, TextArea } from "../ui";
import { useRouter } from "next/router"; 

export const Contact = () => {
  const { ref, inView } = useInView();
  const { locale } = useRouter();

  const textContent = {
    es: {
      title: "Contacto",
      prompt: "Aquí podrán mandarme cualquier consulta que deseen:",
      sendMessage: "Enviar Mensaje",
      location: "Ubicación",
      city: "Córdoba, Córdoba, Argentina",
      email: "Email",
      phone: "Tel",
      form: {
        name: "Nombre",
        email: "Email",
        subject: "Motivo",
        message: "Mensaje a enviar",
      },
    },
    en: {
      title: "Contact",
      prompt: "Here you can send me any inquiries you may have:",
      sendMessage: "Send Message",
      location: "Location",
      city: "Cordoba, Cordoba, Argentina",
      email: "Email",
      phone: "Phone",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message to send",
      },
    },
  };

  // Seleccionar el contenido basado en el locale
  const content = locale === "en" ? textContent.en : textContent.es;

  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    motivo: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    window.open(
      `https://wa.me/+543517895201?text=Hola%20mi%20nombre%20es%20${datos.nombre}%20y%20mi%20email%20es%20${datos.email}%20te%20hablo%20por%20${datos.motivo}%20${datos.mensaje}`,
      "_blank"
    );
  };

  return (
    <Row className={styles.WorkContainer} css={{ padding: "40px" }} id={content.title}>
      <Col>
        <Row justify="center">
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} duration={2}>
            <Text ref={ref} h2 size={50} className={`${styles.border}`}>
              {content.title}
            </Text>
          </AnimationOnScroll>
        </Row>
        <Row className={styles.contactContainer} justify="center" align="center">
          <Col
            css={{
              marginRight: "15px",
              backgroundColor: "white",
              color: "black",
              padding: "15px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 1)",
              borderRadius: "10px",
              width: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={styles.contactLocation}
          >
            <Row className={styles.contactIcon} align="center">
              <FmdGoodTwoToneIcon sx={{ color: "#0253b4", fontSize: "45px" }} />
              <Col>
                <Text color="black" h3 css={{ margin: "0px" }}>
                  {content.location}:
                </Text>
                <Text color="black">{content.city}</Text>
              </Col>
            </Row>
            <Row className={styles.contactIcon} align="center">
              <EmailTwoToneIcon sx={{ color: "#0253b4", fontSize: "45px" }} />
              <Col style={{ wordWrap: "break-word", overflow: "hidden" }}>
                <Text color="black" h3 css={{ margin: "0px" }}>
                  {content.email}:
                </Text>
                <Text color="black">agustin.cordoba.work@gmail.com</Text>
              </Col>
            </Row>
            <Row className={styles.contactIcon} align="center">
              <StayCurrentPortraitTwoToneIcon sx={{ color: "#0253b4", fontSize: "45px" }} />
              <Col>
                <Text color="black" h3 css={{ margin: "0px" }}>
                  {content.phone}:
                </Text>
                <Text color="black">+54 351-7895201</Text>
              </Col>
            </Row>
            <Row>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217954.2534022472!2d-64.33442911558893!3d-31.399377044309926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses-419!2sar!4v1648564223293!5m2!1ses-419!2sar"
                width="100%"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
                title="Cordoba Capital"
              ></iframe>
            </Row>
          </Col>
          <form onSubmit={enviarDatos} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Col
              css={{
                backgroundColor: "#AAA",
                color: "black",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 1)",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                padding: "3vh 2vw",
                justifyContent: "space-between",
                minHeight: "730px",
              }}
            >
              <Text color="white" h3 css={{ textAlign: "center", margin: "4px" }} className={styles.titleContact}>
                {content.prompt}
              </Text>
              <Row justify="center" align="center" style={{ width: "100%" }}>
                <Grid.Container gap={3} style={{ width: "100%" }}>
                  <Grid sm={12} md={6} css={{ padding: "0" }} style={{ width: "100%" }}>
                    <InputUI
                      label={content.form.name}
                      type="text"
                      clearable
                      name="nombre"
                      onCambio={handleInputChange}
                      aria-label="name"
                    />
                  </Grid>
                  <Grid sm={12} md={6} css={{ padding: "0" }} style={{ width: "100%" }}>
                    <InputUI
                      label={content.form.email}
                      type="text"
                      clearable
                      name="email"
                      onCambio={handleInputChange}
                      aria-label="email"
                    />
                  </Grid>
                  <Grid sm={12} css={{ padding: "0" }} style={{ width: "100%" }}>
                    <InputUI
                      clearable
                      label={content.form.subject}
                      type="text"
                      name="motivo"
                      onCambio={handleInputChange}
                      aria-label="motivo"
                    />
                  </Grid>
                  <Grid sm={12} css={{ padding: "0" }} style={{ width: "100%" }}>
                    <TextArea
                      clearable
                      label={content.form.message}
                      rows={5}
                      name="mensaje"
                      onCambio={handleInputChange}
                      aria-label="mensaje"
                    />
                  </Grid>
                </Grid.Container>
              </Row>
              <Row justify="center">
                <Button type="submit" css={{ margin: "20px 0px" }}>
                  {content.sendMessage}
                </Button>
              </Row>
            </Col>
          </form>
        </Row>
      </Col>
    </Row>
  );
};
