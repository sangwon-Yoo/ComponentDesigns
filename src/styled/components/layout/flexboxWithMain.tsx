import React, {ReactNode} from "react";
import { FlexContainerE } from  'src/styled/elements/layout/flexbox/flexContainerE';
import { FlexItemMainE, FlexItemSectionE } from "src/styled/elements/layout/flexbox/flexItemE";

interface flexboxWithMainProps {
    lineYn?: boolean;
    bgColorMain?: string;
    bgColorSection?: string;
    children: ReactNode;
}

const FlexboxWithMain = ({ lineYn = false, bgColorMain = '#fff', bgColorSection = '#fff', children }: flexboxWithMainProps) => {

    const sections = React.Children.map(children, (child) =>
        <FlexItemSectionE lineYn={lineYn} bgColor={bgColorSection}>
            {child}
        </FlexItemSectionE>
    );

    return (
        <FlexContainerE>
            <FlexItemMainE lineYn={lineYn} bgColor={bgColorMain} />
            {sections}
        </FlexContainerE>
    );
};

export default FlexboxWithMain;