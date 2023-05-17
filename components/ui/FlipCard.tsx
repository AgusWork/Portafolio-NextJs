import React, { FC, useState } from "react"
import styles from "./FlipCard.module.scss"
import { Card, Col, Link, Row, Grid } from "@nextui-org/react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import { Box, Modal, Slider } from "@mui/material"
import { SlideShow } from "./SlideShow"

interface Props {
	image: string
	category: string
	client: string
	date: string
	duration: string
	language: string[]
	link: string
	imagenes: string[]
}

export const FlipCard: FC<Props> = ({ image, category, client, date, duration, language = [], link, imagenes }) => {
	const [visible, setVisible] = useState(false)

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
			<Modal open={visible} onClose={() => setVisible(!visible)} sx={{  display:"flex", justifyContent:"center", alignItems: "center"}}>
				<Box sx={{width: "70vw", height: "85vh", position:""}} >
					<SlideShow images={imagenes} />
				</Box>

				{/* <Box sx={{Width: "70vw", height: "85vh", display:"flex", justifyContent:"center", alignItems: "center"}}>
					<div className="navigation-wrapper">
						<div ref={sliderRef} className="keen-slider">
							{imagenes.map((img, idx) => (
								<div key={idx} className="keen-slider__slide" style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
									<img src={img} key={idx} style={{ width: "100vw", height:"80vh" }} alt={img} />
								</div>
							))}
						</div>

						{loaded && instanceRef.current && (
							<>
								<Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

								<Arrow
									onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
									disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
								/>
							</>
						)}
					</div>
				</Box> */}
			</Modal>
			{/* <Modal
				closeButton
				open={visible}
				blur
				onClose={() => setVisible(false)}
				style={{ width: "100vw", height: "60vh" }} 
			>
				<div className="navigation-wrapper" >
					<div ref={sliderRef} className="keen-slider" >
						{imagenes.map((img, idx) => (
							<div key={idx} className="keen-slider__slide" >
								<img
									src={img}
									key={idx}
									style={{ width: "80vw", height: "80vh" }}
									alt={img}
								/>
							</div>
						))}
					</div>

					{loaded && instanceRef.current && (
						<>
							<Arrow
								left
								onClick={(e: any) =>
									e.stopPropagation() || instanceRef.current?.prev()
								}
								disabled={currentSlide === 0}
							/>

							<Arrow
								onClick={(e: any) =>
									e.stopPropagation() || instanceRef.current?.next()
								}
								disabled={
									currentSlide ===
									instanceRef.current.track.details.slides.length - 1
								}
							/>
						</>
					)}
				</div>
			</Modal> */}
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
										<strong>Descripcion:</strong>: {duration}
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
							<Row justify="space-evenly" style={{ width: "100%", margin: "20px 0 20px 0", padding: "0" }}>
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
