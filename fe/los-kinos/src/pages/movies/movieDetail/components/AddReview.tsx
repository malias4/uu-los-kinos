import { Button, FormControl, Grid2, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateReview } from "../api/useCreateReview";

interface AddReviewProps {
    movieId: number;
    userId: number;
}

export const AddReview = (props: AddReviewProps) => {
    const { movieId, userId } = props;
    const [rating, setRating] = React.useState<string>("1");
    const { register, handleSubmit } = useForm();
    const createReview = useCreateReview();

    const handleChange = (event: SelectChangeEvent) => {
        setRating(event.target.value);
    };

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (!rating || !data.comment) {
            return;
        }

        await createReview(
            parseInt(rating),
            data.comment,
            userId,
            movieId
        )

        window.location.reload();
    };

    return (
        <Grid2 marginBottom={3}>
            <Typography variant="h3" marginBottom={3}>Přidat recenzi:</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl sx={{ marginBottom: 3, width: '10vw' }}>
                    <InputLabel id="review-input-label">Hodnocení</InputLabel>
                    <Select
                        labelId="review-input-label"
                        id="select-input-review"
                        label="Hodnocení"
                        variant="outlined"
                        color='primary'
                        value={rating}
                        onChange={handleChange}
                        sx={{
                            color: 'white'
                        }}
                        required
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    {...register('comment')}
                    placeholder="Napište recenzi..."
                    multiline
                    rows={8}
                    sx={{
                        width: '100%'
                    }}
                    required
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        marginTop: 2
                    }}
                >
                    Odeslat
                </Button>
            </form>
        </Grid2>
    )
};