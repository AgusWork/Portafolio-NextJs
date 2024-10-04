import React from "react";
import { useRouter } from "next/router";
import { FaGlobe } from "react-icons/fa";

const Language = ({ defaultLanguage, languages }) => {
	const router = useRouter();

	const handleLanguageChange = (language) => {
		if (language === defaultLanguage) {
			router.push(router.pathname, undefined, { locale: false });
		} else {
			router.push(router.pathname, undefined, { locale: language });
		}
	};

	return (
		<div className="relative h-full w-full z-30">
			<div className="absolute top-0 right-0 flex items-center">
				<FaGlobe className="mr-2 text-blue-600" />
				<div className="flex space-x-1">
					{languages.map((language, index) => (
						<span
							key={index}
							className={`cursor-pointer transition-colors px-1 rounded-lg ${
								language === router.locale
									? "bg-blue-600 text-white font-bold"
									: "text-slate-600 hover:text-blue-400"
							}`}
							onClick={() => handleLanguageChange(language)}
							title={`Switch to ${language === "en" ? "English" : "Español"}`}
						>
							{language.toUpperCase()}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Language;
