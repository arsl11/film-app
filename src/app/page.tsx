import { FilmDetails } from "@/components/FilmDetails/FilmDetails";
import { Reviews } from "@/components/Reviews/Reviews";
import React, { useMemo } from "react";

const filmDetails = {
  id: 'asdjnwjenf2342njna',
  title: 'The Simpsons',
  seasonsCount: 33,
  genre: 'comedy',
  similar: [
    {
      id: 'sa87f68as6f8as68',
      title: 'South Park',
    }
  ],
  reviews: [
    {
      id: 'xc754vcx5',
      author: 'SP',
      text: 'Самый лучший мультфильм',
      rating: '10',
    },
  ]
};

export default function Home() {

  const filmRating = useMemo(() => {
    return Math.floor(
      filmDetails.reviews.reduce((sum, review) => {
        return sum + parseInt(review.rating)
      }, 0) / filmDetails.reviews.length
    )
  }, [filmDetails.reviews]);

  return (
    <div>
      <header />
      <FilmDetails 
        title={filmDetails.title} 
        genre={filmDetails.genre} 
        seasonsCount={filmDetails.seasonsCount}
        rating={filmRating}
      />
      <Reviews reviews={filmDetails.reviews} />
      {/* <Recommendations /> */}
      <footer />
    </div>
  )
}
