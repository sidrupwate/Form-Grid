import React, { } from "react";
import "../Styles/style.css";
import { Button, Grid, Paper, TextField } from "@mui/material";

const AtomForm = () => {

    return (
        <>
            <div className="form">
                <Paper className="paper">
                    <Grid container spacing={4}>
                        <Grid item>
                            <TextField
                                style={{ width: "300px" }}
                                label="Username"
                                type="text"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{ width: "300px" }}
                                label="Email"
                                type="email"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{ width: "300px" }}
                                label="Password"
                                type="password"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{ width: "300px" }}
                                label="Password"
                                type="password"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{ width: "300px" }}
                                label="Password"
                                type="password"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{ width: "300px" }}
                                label="Password"
                                type="password"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{ width: "300px" }}
                                label="Password"
                                type="password"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{ width: "300px" }}
                                label="Password"
                                type="password"
                            />
                        </Grid>

                        <Grid item>
                            <Button  variant="contained" style={{ width: "300px", height: "6vh" }} >Continue</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

        </>
    );
};

export default AtomForm;
