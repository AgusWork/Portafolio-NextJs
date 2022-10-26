import { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import { Works, About } from "../components/general";

const HomePage: NextPage = () => {
	return (
		<Layout title="Portafolio">
			<Works />
			<About />
		</Layout>
	);
};

export default HomePage;
