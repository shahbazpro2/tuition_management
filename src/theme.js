

import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "7px",
                    textTransform: "unset",
                },
                disableElevation: {
                    borderRadius: "7px",
                    textTransform: "unset",
                },
                outlined: {
                    borderRadius: "7px",
                    textTransform: "unset",
                },
                contained: {
                    borderRadius: "7px",
                    textTransform: "unset",
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                inputRoot: {
                    paddingTop: 5
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid  #d5d5d5'
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: 'none'
                }
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    borderRadius: '7px',
                    border: '1px solid #d3d3d3'
                },

            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: 'white',
                    borderRadius: '7px',
                },
                multiline: {
                    height: '100%',
                },

            }
        }
    },

    palette: {
        primary: {
            main: "#D68D08",

        },
        secondary: {
            main: "#5A67A6",
        },
        error: {
            main: "#FC5A5A"
        }
    },
    typography: {
        fontFamily: "'Roboto', sans-serif"
    },

});

export default theme;