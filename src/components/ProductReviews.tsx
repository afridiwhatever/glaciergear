import React from "react";
import ProductRating from "./ProductRating";
import { ArrowRight, ChevronDown } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { Button } from "./ui/button";
import { ProductReview } from "@/types";

const ProductReviews = ({
  productReviews,
}: {
  productReviews: ProductReview[];
}) => {
  return (
    <div className="w-full pt-4 lg:pt-0 space-y-6 ">
      <div className="space-y-2">
        <h2 className="text-2xl font-poppins">Customer Reviews</h2>
        <div className="flex gap-2 items-center pb-4">
          <ProductRating />
          <p>11 Reviews</p>
        </div>
        <div className="relative hover:cursor-pointer">
          <textarea
            placeholder="Share your thoughts"
            className="resize-none py-4 px-6 w-full border border-gray-300 rounded-lg focus:outline-black placeholder:text-sm placeholder:font-poppins"
          />
          <div className="p-1 bg-black rounded-full grid place-content-center absolute top-[50%] -translate-y-[55%] right-4 lg:hidden">
            <ArrowRight className="text-white h-5 w-5" />
          </div>
          <div className="px-6 py-2 bg-zinc-900 text-white text-sm rounded-3xl hidden lg:block absolute top-[50%] -translate-y-[55%] right-4">
            Post Review
          </div>
        </div>
      </div>
      <div className="flex flex-col md:items-center md:flex-row gap-3 justify-between">
        <span className="text-xl font-[500] font-poppins block">
          11 Reviews
        </span>
        <div className="relative">
          <select
            name="review-sort"
            id="review-sort"
            className="border-2 border-gray-200 rounded-md focus:outline-zinc-500 py-2.5 px-4 font-[600] w-full md:w-48"
            style={{
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              backgroundImage: "none",
              background: "none",
            }}
          >
            <option value="newest" selected>
              Newest
            </option>
            <option value="oldest">Oldest</option>
            <option value="positive">Positive</option>
            <option value="critical">Critical</option>
          </select>
          <ChevronDown className="h-5 w-5 absolute right-2 top-[50%] transform -translate-y-[50%] " />
        </div>
      </div>
      <div className="w-full space-y-6">
        {productReviews.map((review) => {
          return <ReviewCard key={review.reviewByUser} review={review} />;
        })}
      </div>
      <div className="max-w-max mx-auto">
        <Button
          variant="ghost"
          className="px-6 border border-zinc-900 rounded-3xl"
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default ProductReviews;
