import React, { useState } from "react";
import styles from "./UiStyles.module.scss";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

export const InputUI = ({ label, type, clearable = false, name, onCambio }) => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<div className={styles.inputDiv}>
			<input
				className={styles.inputInput}
				value={inputValue}
				onChange={(e) => { handleChange(e); onCambio(e); }}
				type={type}
				name={name}
			></input>
			<label
				className={inputValue == "" ? styles.inputLbl : styles.inputLblText}
			>
				{label}
			</label>
			{clearable && inputValue != "" && (
				<CancelRoundedIcon
					sx={{ color: "#414345" }}
					onClick={() => {
						setInputValue("");
					}}
				/>
			)}
		</div>
	);
};
