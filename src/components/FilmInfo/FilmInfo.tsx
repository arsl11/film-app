import { FunctionComponent } from "react";

interface Props {
    title: string;
    genre: string;
    seasonsCount: number;
    rating: number;
}

export const FilmInfo: FunctionComponent<Props> = ({
    title,
    genre,
    seasonsCount,
    rating
}) => {
    return (
        <>
            <p>{title || "Неизвестный"}</p>
            {!!genre && <p>{genre}</p>}
            <p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : "Нету"}</p>
            <p>{rating > 0 ? `Рейтинг ${rating}` : "Нет рейтинга"}</p>
        </>
    )
}