import React from 'react'
import Review from '../components/Review'
import Seo from '../components/Seo'

const ReviewPage = () => {
  return (
    <div>
      <Seo
        title="Leave a Review | Crystal Clean"
        description="Share your experience with Crystal Clean and help other drivers choose trusted detailing services in Okehampton and Devon."
        canonicalPath="/reviews"
      />
      <Review />
    </div>
  )
}

export default ReviewPage
