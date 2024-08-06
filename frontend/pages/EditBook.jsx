// import React from "react";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const EditBook = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [publishYear, setPublishYear] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const { id } = useParams();
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`https://book-mern-ebon.vercel.app/books/${id}`)
			.then((response) => {
				setTitle(response.data.data.title);
				setAuthor(response.data.data.author);
				setPublishYear(response.data.data.publishYear);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const formData = {
			title,
			author,
			publishYear,
		};
		axios
			.put(`https://book-mern-ebon.vercel.app/books/${id}`, formData)
			.then((response) => {
				setIsLoading(false);
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	};
	return (
		<div className='p-4'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl my-8'>Edit Book</h1>
			</div>
			{isLoading ? (
				<Spinner />
			) : (
				<form onSubmit={handleSubmit} className='p-4'>
					<div className='flex flex-col gap-4 ' style={{ margin: "10px" }}>
						<TextField
							id='title'
							label='Title'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className='flex flex-col gap-4 ' style={{ margin: "10px" }}>
						<TextField
							id='author'
							label='Author'
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</div>
					<div className='flex flex-col gap-4 ' style={{ margin: "10px" }}>
						<TextField
							id='publishYear'
							label='Publish Year'
							value={publishYear}
							onChange={(e) => setPublishYear(e.target.value)}
						/>
					</div>
					<Button type='submit' variant='contained'>
						Submit
					</Button>
				</form>
			)}
		</div>
	);
};

export default EditBook;
