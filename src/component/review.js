import React, { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXKcL1Y_0hlrTwMyIcB_ZZF1n_ylhSqMHtvfX-IWtBgkiRaBLE=w72-h72-p-rp-mo-ba4-br100",
    name: "Marc Anthony",
    title: "Local Guide Level 6",
    rating: 4,
    review: "Rooms start at 15000 rwf for a single with breakfast and 20000 rwf for 2 with breakfast. Compared to other hotels in the city within the same price class rooms are pretty good. Couldn’t get a room. It’s a Christian run hostel. They want you to be married or related. If you don’t have a car you will need to walk 10 min to the center.",
    date: "April 10, 2024 on Google",
  },
  {
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWjuA90jshspaW0XLsGQwap6HGHW4jSF_qmEschbS_m3XOv9rw=w72-h72-p-rp-mo-ba2-br100",
    name: "OASIS RWANDA TOURS",
    title: "Local Guide Level 4",
    rating: 5,
    review: "This place is very quite place for meditations and prayers. It is a good place for conferences and meetings. The rooms are very clean and the staff is very friendly. I recommend this place to anyone who wants to have a peaceful time.",
    date: "April 15, 2025 on Google",
  },
  {
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKSkui0BkxJZTzoiKGqB3VdbNyrUFkmAMRMIJgseKVBVG_F3g=w72-h72-p-rp-mo-ba3-br100",
    name: "Angela Bijnsdorp",
    title: "Local Guide Level 5",
    rating: 4,
    review: "The room was clean, bathroom as well. Warm shower. The matrass isn't the best though. The bearkfast is surprisingly fast, and consited of some bread, omelette and fruit. And we paid 20.000 for the double room. Lots of parking space as well.",
    date: " May 20, 2023 on Google",
  },
  {
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVn998eWA-p7ib1Nm9x72zNe-D8j2r6mER7SfAqamK40PPuhY_5=w72-h72-p-rp-mo-ba4-br100",
    name: "James Mucyo",
    title: "Local Guide Level 6",
    rating: 4,
    review: "Very quiet place. But on demand service that may take some little delays. But offerings are very great. I enjoyed \"Agatogo\" a mix of banana and sweet potato and meat with cool soup.",
    date: "April 22, 2022 on Google",
  },
  {
    avatar: "https://lh3.googleusercontent.com/local-reviews/AJMZ0QeFH6dzZjd_ZFLhXHZKibEzXEy8hWzFB4Qa7PutLe3CnO2G7yVfjd4VSabiCQwQYo5W-g=w36-h36-p-rp-br100",
    name: "Suzyquewhittle",
    title: "",
    rating: 5,
    review: "The hostel is very convenient for the centre of Huye and we stayed there before going to see the Kings Palace. The accommodation is basic but clean and comfortable and very good value for a single occupancy.",
    date: "April 22, 2023 on Tripadvisor",
  },
  {
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLlkgklXYLqXBZdGnn1_DT_8PkTIsmCrins_froeidCFU1k-2Y=w72-h72-p-rp-mo-ba3-br100",
    name: "Ritz",
    title: "Local Guide Level 5",
    rating: 5,
    review: "Clean cheap church run hostel close to the centre of town. The rooms are clean, with big beds, big windows and we stayed in the one with attached bathroom. Friendly staff. The inhouse restaurant serves food and drink. Breakfast was generous.",
    date: "April 22, 2016 on Google",
  },
  {
    avatar: "https://lh3.googleusercontent.com/local-reviews/AJMZ0QfjHmZg8gr7jpDgKhrh5KsR_Mq7L6pkVedvpKQz-f3LMiOd3OjI90CK4uLtF3wE59zZgA=w36-h36-p-rp-br100",
    name: "Annick M",
    title: "Client",
    rating: 5,
    review: "The very first thing I asked when I checked it was wether or not their hot water works, however Lo and behold 7am when I am trying to rush out, ice cold water. I immediately informed reception staff and waited for assistance like any paying customer. Instead, a receptionist with a nasty attitude came to tell me I should wait 30 minutes and the problem isn’t them it’s the pipes. Technical issues happen but her attitude was truly nasty. I don’t recommend anyone staying here, save your money and the experience of being told off early in the morning. Disgusting service.",
    date: " October 1, 2019 on Tripadvisor",
  },
  {
    avatar: "https://lh3.googleusercontent.com/local-reviews/AJMZ0QfnSFWXMd1oJu73a6IhdtgibYcjse2HKQTHeghNQd9Cyw8DYQQJZDCyh-TD68ehXuY-FA=w36-h36-p-rp-br100",
    name: "Roving284273",
    title: "Client",
    rating: 5,
    review: "This is convenient place to stay and a wonderful restaurant and outdoor grill if you just want to stop by for something to eat after visiting the nearby National Museum. It is owned and operated by the Benebikira Sisters with profits going to their extensive ministry to the poor, women and education.",
    date: "May 20, 2019 on Tripadvisor",
  },
  {
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV54PgunOWDVVuIraPYhKk632I8szej1tJZ5PQpr9O50KYDqyRToA=w72-h72-p-rp-mo-ba5-br100",
    name: "Roving284273",
    title: "Local Guide Level 7",
    rating: 4,
    review: "The food is available in short period at low price! They offer different options for the rooms! The internet signal is not covering all the space! The staff is very friendly and helpful! The place is very clean and the location is very good! I recommend this place for everyone who wants to visit Huye!",
    date: "May 4, 2013 on google",
  },
  {
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUswcGE4i_XuoHz_GWcAt4IihL0-7lr7mFX0J1tkeF-Ut1cOG9c=w72-h72-p-rp-mo-ba4-br100",
    name: "Am mar",
    title: "Local Guide Level 6",
    rating: 4,
    review: "Very clean rooms, though hot water availability not very reliable. Great value, though! The restaurant is very good, and the staff are friendly. The location is also very good, close to the town center and the national museum.",
    date: "Oct 4, 2019 on google",
  },
];

function ReviewCard({ avatar, name, title, rating, review, date }) {
  const [showModal, setShowModal] = useState(false);
  const isLong = review.length > 120;
  const truncated = isLong ? review.slice(0, 120) + "..." : review;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill={i < rating ? "currentColor" : "none"}
      />
    ));
  };

  return (
    <div className="h-60 min-w-[300px] mb-12 max-w-sm flex-shrink-0 p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex-col items-center justify-center">
      <div >
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
        <div className="flex items-center mt-4 space-x-1">{renderStars(rating)}</div>
        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
          {truncated}
          {isLong && (
            <button
              className="text-blue-500 ml-1 underline text-xs"
              onClick={() => setShowModal(true)}
            >
              Read more
            </button>
          )}
        </p>
      </div>
      <p className="mt-2 text-xs text-gray-400">{date} </p>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-xl">
            <h3 className="text-lg font-semibold mb-2">{name}'s Full Review</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">{review}</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const visibleCards = 3;

  const next = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % reviews.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const prev = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + reviews.length) % reviews.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth / visibleCards;
      containerRef.current.scrollTo({
        left: scrollAmount * index,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden ">
     <p className='text-center sm:text-[2.5rem] text-[1.825rem]  font-bold text-Teal'>What Our Customers Say (reviews)</p>
     <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm md:text-base mb-4">
  We value your feedback and strive to provide the best experience possible. Here are some reviews from our satisfied customers.
  <a
    href="https://www.google.com/maps/place/Emaus+Hostel/@-2.5956857,29.7447154,1154m/data=!3m1!1e3!4m11!3m10!1s0x19c30cf79a29a57f:0xdd841da65e15add3!5m2!4m1!1i2!8m2!3d-2.5951656!4d29.7446889!9m1!1b1!16s%2Fg%2F11h10dxht?entry=ttu"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-2 inline-block px-6 py-2 font-bold border border-white text-white bg-Teal rounded-lg text-sm"
  >
    Add your Review
  </a>
</p>


      <button
        onClick={prev}
        className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 mt-4 rounded-full hover:bg-gray-100"
      >
        ❮
      </button>
      <div
        ref={containerRef}
        className="flex overflow-x-hidden scroll-smooth gap-4 px-4"
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <button
        onClick={next}
        className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 rounded-full hover:bg-gray-100"
      >
        ❯
      </button>
    </div>
  );
}
