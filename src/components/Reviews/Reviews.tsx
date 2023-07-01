import { FunctionComponent } from "react";
import { Review } from "../Review/Review";

interface Props {
    reviews: {
        id: string,
        author: string,
        text: string,
        rating: string
    }[]
}
export const Reviews: FunctionComponent<Props> = ({
    reviews
}) => {
    return (
        <div>
            {
                reviews.length > 0 && reviews.map(
                    (review) => (
                        <Review
                            key={review.id}
                            rating={review.rating}
                            text={review.text}
                            author={review.author} 
                        />
                    )
                )
            }
        </div>
    )
}