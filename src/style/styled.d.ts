// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            signature: {
                base: string;
                pointer: string;
            },
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