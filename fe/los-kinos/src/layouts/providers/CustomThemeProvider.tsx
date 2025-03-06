import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                color: "#F9F0F5",
                backgroundColor: "#A24936",
                "&:hover": {
                  backgroundColor: "#8A3F2E",
                },
              },
            },
            {
              props: { variant: "contained", color: "secondary" },
              style: {
                color: "#F9F0F5",
                backgroundColor: "#54786E",
                "&:hover": {
                  backgroundColor: "#436058",
                },
              },
            },
            {
              props: { variant: "contained", color: "info" },
              style: {
                color: "#A24936",
                backgroundColor: "#F9F0F5",
                "&:hover": {
                  backgroundColor: "#F9F0F5",
                },
              },
            },
            {
              props: { variant: "contained", color: "info" },
              style: {
                color: "#A24936",
                backgroundColor: "#F9F0F5",
                "&:hover": {
                  backgroundColor: "#F9F0F5",
                },
              },
            },
            {
              props: { variant: "outlined", color: "primary" },
              style: {
                color: "#F9F0F5",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(249, 240, 245, 0.05)",
                },
              },
            },
            {
              props: { variant: "outlined", color: "secondary" },
              style: {
                color: "#A24936",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(249, 240, 245, 0.05)",
                },
              },
            },
            {
              props: { variant: "contained", color: "info" },
              style: {
                color: "#54786E",
                backgroundColor: "#F9F0F5",
                "&:hover": {
                  backgroundColor: "#F9F0F5",
                },
              },
            },
          ],
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            color: "#F9F0F5",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#F9F0F5",
            },
            "&:hover fieldset": {
              borderColor: "#F9F0F5",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#F9F0F5",
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0F060B",
          border: "2px solid #F9F0F5",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#F9F0F5",
          "&:hover": {
            backgroundColor: "rgba(249, 240, 245, 0.1)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#F9F0F5",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          variant: {
            props: { variant: "outlined", color: 'primary' },
            style: {
              border: '1px solid white'
            }
          }
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#F9F0F5"
    },
    secondary: {
      main: "#A24936"
    },
    info: {
      main: "#2A3C37"
    }
  },
  typography: {
    fontFamily: "Arial",
    h1: {
      fontSize: "5rem",
      fontWeight: "bold",
      color: "#F9F0F5",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#F9F0F5",
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#F9F0F5",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#F9F0F5",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#F9F0F5",
    },
    body1: {
      fontSize: "1rem",
      color: "#F9F0F5",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 800,
      lg: 1280,
      xl: 1920,
    },
  },
} as ThemeOptions);

interface CustomThemeProviderProps {
  children: ReactNode;
}

export default function CustomThemeProvider({
  children,
}: CustomThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
