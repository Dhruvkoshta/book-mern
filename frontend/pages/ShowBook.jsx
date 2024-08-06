import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ShowBook = () => {
	const { id } = useParams();
	const [book, setBook] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		axios.get(`http://localhost:3000/books/${id}`).then((response) => {
			setBook(response.data.data);
		});
	}, []);
	const card = (
		<React.Fragment>
			<CardContent>
				<Typography variant='h5' color='text.primary' gutterBottom>
					Book
				</Typography>
				<Typography component='div'>Title: {book.title}</Typography>
				<Typography component='div'>Author: {book.author}</Typography>
				<Typography component='div'>Year: {book.publishYear}</Typography>
			</CardContent>
			<CardActions style={{ justifyContent: "center", display: "flex" }}>
				<Button
					size='small'
					color='primary'
					variant='contained'
					onClick={() => {
						navigate("/");
					}}
				>
					Back
				</Button>
			</CardActions>
		</React.Fragment>
	);
	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant='outlined'>{card}</Card>
		</Box>
	);
};

export default ShowBook;
