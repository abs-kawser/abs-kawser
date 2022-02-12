import React from "react";
//tws
const Navbar = ({ setPage }) => {
	return (
		<nav>
			<button onClick={() => setPage("User")}>User</button>
			<button onClick={() => setPage("post")}>post</button>
		</nav>
	);
};

export default Navbar;
