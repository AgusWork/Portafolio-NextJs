import { NextPage} from "next";
import { Layout } from "../components/layouts";
import { Works, About, Skills, SoftSkills, Contact, Projects } from "../components/general";
import fsPromises from 'fs/promises';
import path from 'path'


const HomePage: NextPage = (props : {objectDataProjects : {}, objectDataWorks : {}, objectDataLenguajes : {} }) => {
	return (
		<Layout title="Portafolio" >
			<Works props={props.objectDataWorks} />
			<Projects props={props.objectDataProjects}/>
			<About />
			<Skills props={props.objectDataLenguajes}/>
			<SoftSkills/>
			<Contact/>
		</Layout>
	);
};

export async function getStaticProps() {
	const filePathProjects = path.join(process.cwd(), 'projectsdata.json');
	const jsonDataProjects = await fsPromises.readFile(filePathProjects);
	const objectDataProjects = JSON.parse(jsonDataProjects.toString());

	const filePathWorks = path.join(process.cwd(), 'projectsdata.json');
	const jsonDataWorks = await fsPromises.readFile(filePathWorks);
	const objectDataWorks = JSON.parse(jsonDataWorks.toString());

	const filePathLenguajes = path.join(process.cwd(), 'projectsdata.json');
	const jsonDataLenguajes = await fsPromises.readFile(filePathLenguajes);
	const objectDataLenguajes = JSON.parse(jsonDataLenguajes.toString());
  
	return {
	  props: {objectDataProjects, objectDataWorks, objectDataLenguajes }
	}
  }

export default HomePage;
