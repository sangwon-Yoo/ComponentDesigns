// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            bg: {
                primary: string;
                secondary: string;
            };
            font: {
                primary: string;
                secondary: string;
            };
        };

        font: {
            primary: string;
            secondary: string;
        };

        size: {

        };
    }
}