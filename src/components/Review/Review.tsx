import { FunctionComponent } from "react";

interface Props {
    text: string;
    author: string;
    rating: string;
}

export const Review: FunctionComponent<Props> = ({
    text,
    author,
    rating,
}) => {
    return (
        <div>
            <span>{author}</span>
            <span>{text}</span>
            <span>{rating}</span>
        </div>
    );
}