import { deleteReviewAction, fetchProductReviewsByUser } from '@/utils/actions';
import ReviewCard from '@/components/reviews/ReviewCard';
import SectionTitle from '@/components/global/SectionTitle';
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';

const ReviewsPage = async () => {
  const reviews = await fetchProductReviewsByUser();
  if (reviews.length === 0)
    return <SectionTitle text='you have no reviews yet' />;

  return <div>ReviewsPage</div>;
};

export default ReviewsPage;
