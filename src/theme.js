

// Create a theme instance.
const globalTheme = {
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
        },
    },


    typography: {
        fontFamily: "'Roboto', sans-serif"
    },

}

export default globalTheme;