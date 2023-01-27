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
					className="blockb text-sm font-medium text-gray-300 mb-2"
				>
					{labelName}
				</label>
				{isSurpriseMe && (
					<button
						type="button"
						onClick={handleSurpriseMe}
						className="transition duration-500 ease-in-out font-bold text-xs shadow-[0_0_6px_#888] py-1 px-2 rounded-[5px] text-white active:bg-[linear-gradient(90deg,#00ffbb,#0ff)] hover:scale-110 active:scale-100"
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
				autoComplete="off"
				minLength={isSurpriseMe ? 10 : 3}
				required
				className="text-gray-300 text-sm rounded-lg outline-none block p-3 "
			/>
		</div>
	);
};

export default FormField;
