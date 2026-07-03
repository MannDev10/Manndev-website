import React from "react";

const Page = (props: any) => {
    React.useEffect(() => {
        document.title = props.title || "";
    }, [props.title]);
    return props.children;
};

export default Page;