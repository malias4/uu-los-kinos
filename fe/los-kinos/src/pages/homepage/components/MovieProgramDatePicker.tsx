import { Button, Grid2 } from "@mui/material"
import { formatDateForScreeningDatePicker } from "../utils/formatDateForScreeningDatePicker";

interface MovieProgramDatePickerProps {
    dates: Date[];
    onDateChange: (date: Date) => void;
    selectedDate: Date;
}

export const MovieProgramDatePicker = (props: MovieProgramDatePickerProps) => {
    const { dates, onDateChange, selectedDate } = props;

    return (
        <Grid2
            container
            flexDirection='row'
            spacing={2}
            padding={2}
            sx={{
                backgroundColor: '#54786E'
            }}
        >
            {
                dates.map((date) => (
                    <Grid2
                        key={date.toString()}
                    >
                        <Button
                            onClick={() => onDateChange(date)}
                            variant={formatDateForScreeningDatePicker(selectedDate) == formatDateForScreeningDatePicker(date) ? 'contained' : 'outlined'}
                            key={date.toString()}
                        >
                            {formatDateForScreeningDatePicker(date)}
                        </Button>
                    </Grid2>
                ))
            }
        </Grid2>
    )
}