import React, { } from "react";
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
} from "@mui/material";
// import "../styles/style.css";    

const Form = ({ formData, handleChange, formArray, handleSubmit }) => {

    if (!formArray.length) {
        return null;
    }
    return (
        <>
            <div>
                <Paper>
                    <h1>Welcome</h1>
                    <Grid container>
                        {formArray.map((item, idx) => {
                            const { name, value, label, type, fieldoption, gridSizes } = item;
                            if (type === "textfield") {
                                return (
                                    <Grid item {...gridSizes}>
                                        <div>
                                            <TextField
                                                key={idx}
                                                label={label}
                                                name={name}
                                                value={value}
                                                onChange={(e) => handleChange(e, name)}
                                                type="text"
                                                required
                                                style={{ width: "350px" }}
                                            />
                                        </div>
                                    </Grid>
                                );
                            }

                            if (type === "select") {
                                return (
                                    <Grid item {...gridSizes}>
                                        <div>

                                            <FormControl style={{ width: "100px" }} key={idx}>
                                                <InputLabel id={`select-label-${idx}`}>{label}</InputLabel>
                                                <Select
                                                    labelId={`select-label-${idx}`}
                                                    id={`select-${idx}`}
                                                    value={value}
                                                    label={label}
                                                    onChange={(e) => handleChange(e, "age")}
                                                    required
                                                >
                                                    {fieldoption.map((i, index) => (
                                                        <MenuItem key={index} value={i.value}>
                                                            {i.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>

                                            </FormControl>
                                        </div>
                                    </Grid>

                                );

                            }

                        }

                        )

                        }
                        <Grid item>
                            <div>
                                <Button variant="contained">Continue</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

        </>
    );
};

export default Form;