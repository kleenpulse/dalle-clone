import React from "react";

const FormField = ({
	labelName,
	type,
	name,
	placeholder,
	value,
	handleChange,
	isSurpriseMe,
	handleSurpriseMe,
}) => {
	return (
		<div>
			<div className="flex items-center gap-2 mb-2">
				<label
					htmlFor={name}
					className="blockb text-sm font-medium text-gray-900"
				>
					{labelName}
				</label>
				{isSurpriseMe && (
					<button
						type="button"
						onClick={handleSurpriseMe}
						className="transition duration-500 ease-in-out font-bold text-xs bg-[#03cfc4] py-1 px-2 rounded-[5px] text-white active:bg-[linear-gradient(90deg,#00ffbb,#0ff)] hover:scale-110 active:scale-90"
					>
						Surprise me
					</button>
				)}
			</div>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 "
			/>
		</div>
	);
};

export default FormField;
