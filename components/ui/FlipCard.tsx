import React, { FC, useState } from "react"
import styles from "./FlipCard.module.scss"
import { Card, Col, Link, Row, Grid } from "@nextui-org/react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import { Box, Modal, Slider, Tooltip, Typography } from "@mui/material"
import { SlideShow } from "./SlideShow"
import DescriptionIcon from "@mui/icons-material/Description"
interface Props {
	image: string
	category: string
	client: string
	date: string
	duration: string
	language: string[]
	link: string
	imagenes: string[]
	description?: string
}

export const FlipCard: FC<Props> = ({ image, category, client, date, duration, language = [], link, imagenes, description }) => {
	const [visible, setVisible] = useState(false)
	const [modalVisible, setModalVisible] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		loop: true,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
		created() {
			setLoaded(true)
		},
	})

	const openPictures = () => {
		setVisible(!visible)
	}
	return (
		<>
			<Modal open={visible} onClose={() => setVisible(!visible)} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Box sx={{ width: "70vw", height: "85vh", position: "" }}>
					<SlideShow images={imagenes} />
				</Box>
			</Modal>

			<Card className={styles.flipCard} role={"contentinfo"}>
				<div className={styles.flipCardInner}>
					<Image
						src={image}
						fill
						// height={100}
						// width={100}
						className={styles.flipCardFront}
						alt={client}
					/>
					<div className={styles.flipCardBack}>
						<Col className={styles.innerFCB}>
							<ul className={styles.list}>
								<li>
									<p style={{ fontSize: "100%" }}>
										<strong>Categoria:</strong>: {category}
									</p>
								</li>

								<li style={{ fontSize: "100%" }}>
									<p>
										<strong>Cliente</strong>: {client}
									</p>
								</li>
								<li style={{ fontSize: "100%" }}>
									<p>
										<strong>Fecha del Proyecto</strong>: {date}
									</p>
								</li>
								<li style={{ fontSize: "100%" }}>
									<p>
										<strong>Duracion:</strong>: {duration}
									</p>
								</li>

								<Row>
									<li>
										<p>
											<strong>Tecnologias</strong>:{" "}
										</p>
									</li>
									<Grid.Container>
										{language.map((leng, idx) => (
											<Grid key={idx} justify="center" xs={6} sm={4} lg={3}>
												<Image key={idx} src={leng} width={50} height={50} alt="Lenguajes de Programacion" />
											</Grid>
										))}
									</Grid.Container>
								</Row>
							</ul>
							<Row justify="center" align="center" gap={3} style={{ width: "100%", margin: "20px 0 20px 0", padding: "0" }}>
								{link != "" && (
									<Link
										isExternal
										style={{
											maxWidth: "150px",
											width: "15vw",
											minWidth: "90px",
											height: "50px",
											border: "2px solid",
											borderRadius: "20px",
											backgroundColor: "white",
											justifyContent: "center",
										}}
										href={link}
									>
										Visitar
									</Link>
								)}
								{description && (
									<Tooltip title="Descripción">
										<button
											style={{
												maxWidth: "40px",
												width: "15vw",
												minWidth: "20px",
												height: "40px",
												border: "2px solid #0072F5",
												color: "#0072F5",
												borderRadius: "10px",
												backgroundColor: "white",
												justifyContent: "center",
												cursor: "pointer",
												margin: "0 10px",
											}}
											onClick={() => setModalVisible(!modalVisible)}
										>
											<DescriptionIcon />
										</button>
									</Tooltip>
								)}
								<button
									onClick={() => openPictures()}
									style={{
										maxWidth: "150px",
										width: "15vw",
										minWidth: "90px",
										height: "50px",
										border: "2px solid #0072F5",
										color: "#0072F5",
										borderRadius: "20px",
										backgroundColor: "white",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									Fotos
								</button>
							</Row>
							<Modal open={modalVisible} onClose={() => setModalVisible(!modalVisible)}>
								<Box
									sx={{
										position: "absolute" as "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
										width: 400,
										bgcolor: "background.paper",
										border: "2px solid #000",
										boxShadow: 24,
										p: 4,
									}}
								>
									<Typography id="modal-modal-title" variant="h6" component="h2">
										Acerca de este trabajo:
									</Typography>
									<Typography id="modal-modal-description" sx={{ mt: 2 }}>
										{description}
									</Typography>
								</Box>
							</Modal>
						</Col>
					</div>
				</div>
			</Card>
		</>
	)
}

function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
	const disabeld = props.disabled ? " arrow--disabled" : ""
	return (
		<svg
			onClick={props.onClick}
			className={`${styles.arrow} ${props.left ? styles.arrowLeft : styles.arrowRight} ${disabeld}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
			{!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
		</svg>
	)
}
