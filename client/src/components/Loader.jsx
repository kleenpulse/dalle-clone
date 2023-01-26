import React from "react";
import { placeholders } from "../assets";

function randomLoader() {
	const randomIndex = Math.floor(Math.random() * placeholders.length);
	const loader = placeholders[randomIndex];

	if (loader[0] === loader) return randomLoader();

	return loader;
}
const Loader = () => (
	<div role="status">
		<img src={randomLoader()} alt="loading" className="w-32 h-auto" />
		<p className="w-full text-white font-bold text-center">loading...</p>
	</div>
);

export default Loader;
