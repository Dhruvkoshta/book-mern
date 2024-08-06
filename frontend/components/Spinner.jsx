import { Skeleton, Stack } from "@mui/material";

const Spinner = () => {
	return (
		<div
			style={{
				position: "absolute",
				top: "40%",
				left: "50%",
				transform: "translate(-50%,-50%)",
			}}
		>
			<Stack spacing={1}>
				{/* For variant="text", adjust the height via font-size */}
				<Skeleton variant='text' sx={{ fontSize: "1rem" }} />
				{/* For other variants, adjust the size with `width` and `height` */}
				<Skeleton variant='circular' width={60} height={60} />
				<Skeleton variant='rectangular' width={310} height={60} />
				<Skeleton variant='rounded' width={310} height={60} />
			</Stack>
		</div>
	);
};

export default Spinner;
