import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
const App = () => {
	return (
		<BrowserRouter>
			<header className="fixed top-0 w-full flex items-center sm:px-8 px-4 py-4 justify-between bg-transparent backdrop-blur-[10px] border-b border-b-gray-400 z-50">
				<Link to="/">
					<img src={logo} alt="logo" className="w-28 object-contain invert" />
				</Link>
				<Link
					id="create"
					to="/create-post"
					className="uppercase font-inter font-bold shadow-[0_0_8px_#888] text-white px-4 py-2 rounded-md"
				>
					Create
				</Link>
			</header>
			<main className="sm:p-8 px-4 pt-8 w-full bg-black min-h-[calc(100vh-73px)] mt-[4rem] sm:pb-0">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create-post" element={<CreatePost />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
