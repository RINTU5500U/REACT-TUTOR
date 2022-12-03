import React from "react";

const Sresult = () => {
    const img = `https://source.unsplash.com/user/erondu/300x400/?${props.name}`
    return (
        <>
            <div>
                <img src={img} alt='search'/>
            </div>
        </>
    )
}

export default Sresult