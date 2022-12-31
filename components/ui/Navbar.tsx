import React, { useRef, useState, useEffect } from "react";
import { useTheme, Navbar, Row, Link } from "@nextui-org/react";
import styles from "./UiStyles.module.scss";
const links = ["Exp. Laboral","Exp. Profesional" , "Sobre Mi", "Skills", "Soft Skills", "Contacto"];
import Scrollspy from "react-scrollspy";

export const NavBar = () => {
	const { theme } = useTheme();
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState();

	const handleClick = (link: string) => {
		const element = document.getElementById(link);
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Required
	// this is how we enable again scroll after closing Navbar.Collapse
	// when we dont click the Navbar.Toggle button
	useEffect(() => {
		document.body.style.overflow = null;
		isSideMenuOpen && (document.body.style.overflow = "hidden");
	}, [isSideMenuOpen]);

	// Flag is just to know if we are navigating from Navbar.Collapse or CollapseItem links
	// any other place should not toggle the state of Navbar.Collapse
	// pass the flag={true} to toggle side menu
	const HandleSideMenu = (flag = false, index = undefined) => {
		setActiveMenu(index);
		flag && setIsSideMenuOpen(!isSideMenuOpen);
		isSideMenuOpen && setIsSideMenuOpen(false);
	};

	return (
		<Navbar
			css={{
				backgroundImage:
					"linear-gradient(90deg, rgba(57, 63, 215, 0.25) 10%, rgba(68, 110, 218, 0.25) 90%)",
			}}
			variant="sticky"
			isCompact
		>
			<Navbar.Brand>
				<Navbar.Toggle
					aria-label="toggle navigation"
					showIn="xs"
					isSelected={isSideMenuOpen}
					onChange={() => HandleSideMenu(true, activeMenu)}
				/>
			</Navbar.Brand>
			<Row justify="center" align="center">
				<Navbar.Content hideIn="xs">
					{links.map((link, idx) => (
						<Scrollspy
							items={[link]}
							currentClassName={styles.active}
							key={idx}
						>
							<Navbar.Link
								key={idx}
								onClick={() => handleClick(link)}
								className={styles.navbarLink}
							>
								{link}
							</Navbar.Link>
						</Scrollspy>
					))}
				</Navbar.Content>
				<Navbar.Collapse isOpen={isSideMenuOpen} css={{position:"absolute", left:"0px", margin:"0", padding:"0px", marginLeft:"-42px", top:"26px", width:"100vw"}}> 
					{links.map((link, idx) => (
						<Navbar.CollapseItem key={idx} disableAnimation={true}>
							<Link
								key={idx}
								onClick={() => {handleClick(link), HandleSideMenu(false, idx)}}
								className={styles.navbarLink}
							>
								{link}
							</Link>
						</Navbar.CollapseItem>
					))}
				</Navbar.Collapse>
			</Row>
		</Navbar>
	);
};
