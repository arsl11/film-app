"use client"

import { useCount } from "@/hooks/useCount";
import { FunctionComponent } from "react";
import { FilmInfo } from "../FilmInfo/FilmInfo";

interface Props {
    title: string;
    genre: string;
    seasonsCount: number;
    rating: number;
}

export const FilmDetails: FunctionComponent<Props> = ({
    title,
    genre,
    seasonsCount,
    rating,
}) => {
    let {count, decrement, increment} = useCount(0);
    return (
        <div>
            <FilmInfo
                title={title}
                genre={genre}
                seasonsCount={seasonsCount}
                rating={rating} 
            />
            <div>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
};