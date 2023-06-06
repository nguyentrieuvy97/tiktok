import { useState, useEffect } from "react";


function Content({index}) {
    useEffect(() => {
        console.log(index)
    }, [index])
    return (
        <h1>Hi Content {index}</h1>
    )
}
export default Content;