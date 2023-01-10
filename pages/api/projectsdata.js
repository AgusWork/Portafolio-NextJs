import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
	//   //Find the absolute path of the json directory
	//   const jsonDirectory = path.join(process.cwd(), 'json');
	//   //Read the json data file data.json
	//   const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
	//   //Return the content of the data file in json format
	res.status(200).json({
		records: [
			{
				image: "/practicas/MarvelDc/MarvelDc1.png",
				category: "Practice",
				client: "Buscador Marvel/Dc",
				date: "05 Mayo, 2022",
				link: "https://heroes-app-rouge.vercel.app/",
				duration:
					"Buscador de Marvel y DC con una busqueda por api y una practica de proteccion de ruta por el Login",
				language: [
					"/iconos/Git.png",
					"/iconos/NextJs.png",
					"/iconos/Figma.png",
					"/iconos/React.png",
					"/iconos/Sass.png",
				],
				imagenes: [
					"/practicas/MarvelDc/MarvelDc1.png",
					"/practicas/MarvelDc/MarvelDc2.png",
					"/practicas/MarvelDc/MarvelDc3.png",
				],
			},
			{
				image: "/practicas/Bar/Bar1.png",
				category: "Practice",
				client: "Boceto app para barra de boliche",
				date: "10 Octubre,2022",
				link: "https://barra-boliche.vercel.app/",
				duration:
					"App de boliche con carrito en donde sus datos se guardan en local host, practica de scrum",
				language: [
					"/iconos/Git.png",
					"/iconos/NextJs.png",
					"/iconos/Figma.png",
					"/iconos/React.png",
					"/iconos/Sass.png",
				],
				imagenes: [
					"/practicas/Bar/Bar1.png",
					"/practicas/Bar/Bar2.png",
					"/practicas/Bar/Bar3.png",
				],
			},
			{
				image: "/practicas/Pokemon/Pokemon1.png",
				category: "Practice",
				client: "Pokemon App",
				date: "15 Marzo, 2022",
				link: "https://pokemon-app1-zl1y.vercel.app/",
				duration:
					"Aplicacion de pokemons en donde se traen los pokemons de la pokeapi y se pueden guardar en otra pantalla los que considere como favoritos.",
				language: [
					"/iconos/Git.png",
					"/iconos/NextJs.png",
					"/iconos/Figma.png",
					"/iconos/React.png",
					"/iconos/Sass.png",
				],
				imagenes: [
					"/practicas/Pokemon/Pokemon1.png",
					"/practicas/Pokemon/Pokemon2.png",
					"/practicas/Pokemon/Pokemon3.png",
					"/practicas/Pokemon/Pokemon4.png",
				],
			},
			{
				image: "/practicas/GifApp/Gif1.png",
				category: "Practice",
				client: "Gif App",
				date: "20 Febrero, 2022",
				link: "https://react-gif-app-sigma.vercel.app/",
				duration:
					"App para buscar cualquier tipo de Gif que trae desde una api, search + api",
				language: [
					"/iconos/Git.png",
					"/iconos/Figma.png",
					"/iconos/React.png",
					"/iconos/Sass.png",
				],
				imagenes: [
					"/practicas/GifApp/Gif1.png",
					"/practicas/GifApp/Gif2.png",
					"/practicas/GifApp/Gif3.png",
				],
			},
			{
				image: "/practicas/OpenJira/Open1.png",
				category: "Practice",
				client: "Open Jira",
				date: "05 Julio, 2022",
				link: "",
				duration:
					"App de Organizacion de entradas, metodologia scrum, ademas se puede arrastrar y cambiar de estado de la entrada",
				language: [
					"/iconos/Git.png",
					"/iconos/NextJs.png",
					"/iconos/Figma.png",
					"/iconos/React.png",
					"/iconos/Sass.png",
					"/iconos/MongoDB.png",
					"/iconos/Docker.png",
					"/iconos/Node.png",
				],
				imagenes: [
					"/practicas/OpenJira/Open1.png",
					"/practicas/OpenJira/Open2.png",
					"/practicas/OpenJira/Open3.png",
					"/practicas/OpenJira/Open4.png",
					"/practicas/OpenJira/Open5.png",
					"/practicas/OpenJira/OpenVideo.mp4",
				],
			},
		],
	});
}
