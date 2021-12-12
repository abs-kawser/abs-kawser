import React from "react";

const Navbar = ({ setPage }) => {
	return (
		<nav>
			<button onClick={() => setPage("User")}>User</button>
			<button onClick={() => setPage("post")}>post</button>
		</nav>
	);
};

export default Navbar;