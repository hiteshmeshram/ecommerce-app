"use client"
import { CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";

export const Spinner = ()=>{
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
    return <div>
            <BeatLoader
            color="blue"
            loading={true}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
      />
    </div>
}