import { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import { Works, About, Skills } from "../components/general";

const HomePage: NextPage = () => {
	return (
		<Layout title="Portafolio">
			<Works />
			<About />
			<Skills />
		</Layout>
	);
};

export default HomePage;
