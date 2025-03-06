import CustomThemeProvider from "./providers/CustomThemeProvider";
import { NavigationBar } from "./components/NavigationBar";

interface GeneralLayoutProps {
    children: React.ReactNode;
}

export const GeneralLayout = (props: GeneralLayoutProps) => {
    const { children } = props;

    return (
        <CustomThemeProvider>
            <NavigationBar />
            {children}
        </CustomThemeProvider>
    );
};