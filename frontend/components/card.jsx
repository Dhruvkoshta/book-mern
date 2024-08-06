import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

const card = () => {
	const card = (
		<React.Fragment>
			<CardContent>
				<Typography variant='h5' component='div'>
					aaaaa
				</Typography>
				<Typography variant='h5' component='div'>
					aaaaa
				</Typography>
				<Typography variant='h5' component='div'>
					aaaaa
				</Typography>
				<Typography variant='h5' component='div'>
					aaaaa
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</React.Fragment>
	);
	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant='outlined'>{card}</Card>
		</Box>
	);
};

export default card;
