interface CommunitySpeakItem {
  blockquote: string;
  p: string;
}

interface CommunitySpeakSection {
  heroHeading: string;
  speaksArray: CommunitySpeakItem[];
}

export const CommunitySpeak: CommunitySpeakSection = {
  heroHeading: 'Our Community Speaks',
  speaksArray: [
    {
      blockquote: `"Joining Back to Bachpan was one of the best decisions I've
              made in my later years. Not only have I picked up new hobbies
              and skills, but I've also found a supportive network of
              friends who understand and appreciate me. It's never too late
              to embrace joy and purpose!"`,
      p: `- SK Sharma, 55 Years`,
    },
    {
      blockquote: `"Back to Bachpan isn't just about activities; it's about
              rekindling the spark of youth within us. Through their
              thoughtful programs, I've not only rediscovered my passions
              but also found a renewed sense of belonging and fulfillment.
              Thank you for making my retirement truly meaningful."`,
      p: `- Nirmala Patel, 62 Years`,
    },
  ],
};
