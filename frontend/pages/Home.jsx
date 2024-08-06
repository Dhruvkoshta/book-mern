import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Home = () => {
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get("http://localhost:3000/books")
			.then((response) => {
				setBooks(response.data.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	}, []);

	const handleDelete = (id) => {
		setIsLoading(true);
		axios
			.delete(`http://localhost:3000/books/${id}`)
			.then((response) => {
				setIsLoading(false);
				window.location.reload(false);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	};

	return (
		<div className='p-4'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl my-8 decoration-solid'>Books</h1>
				<span
					style={{
						fontSize: "1.5rem",
						textDecoration: "none",
						position: "relative",
						top: "-5px",
					}}
				>
					Add Book:{" "}
				</span>
				<Link to='/books/create'>
					<MdOutlineAddBox style={{ fontSize: "2rem" }} className='text-4xl' />
				</Link>
			</div>
			{isLoading ? (
				<Spinner />
			) : (
				<div>
					{books.map((book, index) => (
						<TableRow
							key={book._id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component='th' scope='row'>
								{index + 1}
							</TableCell>
							<TableCell align='right'>{book.title}</TableCell>
							<TableCell className='max-md:hidden' align='right'>
								{book.author}
							</TableCell>
							<TableCell className='max-md:hidden' align='right'>
								{book.publishYear}
							</TableCell>
							<TableCell align='right'>
								<div className='fles justify-center gap-x-5'></div>
							</TableCell>
						</TableRow>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
