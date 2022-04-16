import { createTheme } from "@mui/material";

const useCustomTheme = (darkMode) => {
    const customTheme = createTheme(
        darkMode
            ? {
                palette: {
                    primary: {
                        main: "#121212",
                    },
                    secondary: {
                        main: "#ffffff",
                    },
                    accent: {
                        main: "#171C26",
                    },
                    pink: {
                        main: "#E552FF",
                    },
                    blue: {
                        main: "#01D4FA",
                    },
                    black: {
                        main: "#040404",
                    },
                },
                typography: {
                    fontFamily: "'Poppins', sans-serif",
                    fontWeightRegular: 400,
                    fontWeightMedium: 500,
                    fontWeightBold: 700,
                },
                breakpoints: {
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1200,
                        xl: 1400,
                    },
                },
                MuiContainer: {
                    root: {
                      
                      marginRight: "0px",
                      paddingRigth: "0px",
                      paddingLeft: "30px",
                     /* [breakpoints.up('sm')]: {
                        paddingLeft: "30px",
                        paddingRight: "0px",
                      },*/
                    },
                  },
            }
            : {
                palette: {
                    background: {
                        default: "#ffffff",
                    },
                    primary: {
                        main: "#ffffff",
                    },
                    secondary: {
                        main: "#121212",
                    },
                    accent: {
                        main: "#fff2f8",
                    },
                    pink: {
                        main: "#E552FF",
                    },
                    blue: {
                        main: "#01D4FA",
                    },
                    black: {
                        main: "#FFFFFF",
                    },
                },
                typography: {
                    fontFamily: "'Poppins', sans-serif",
                    fontWeightRegular: 400,
                    fontWeightMedium: 500,
                    fontWeightBold: 700,
                },
                breakpoints: {
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1200,
                        xl: 1400,
                    },
                },
                MuiContainer: {
                    root: {
                      
                        marginRight: "0px",
                        paddingRigth: "0px",
                        paddingLeft: "30px",
                       /* [breakpoints.up('sm')]: {
                          paddingLeft: "30px",
                          paddingRight: "0px",
                      },*/
                    },
                  },
            },
  );

  return { customTheme };
};

export default useCustomTheme;
