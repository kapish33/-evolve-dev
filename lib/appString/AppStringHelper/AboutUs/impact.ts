interface ImpactItem {
  h3: string;
  p: string;
}

interface ImpactSection {
  Heroh2: string;
  impactArray: ImpactItem[];
}

export const Impact: ImpactSection = {
  Heroh2: 'Impact We Are Making',
  impactArray: [
    {
      h3: 'Back to Bachpan',
      p: ` 300+ elderly individuals have become an integral part of our
        "Back to Bachpan" program, fostering a sense of community and
        belonging.`,
    },
    {
      h3: 'Volunteering Team',
      p: `Our NGO boasts a strong volunteering team of 25+ dedicated
        individuals who are passionate about making a difference in
        the lives of others.`,
    },
    {
      h3: 'Diverse Sessions',
      p: `We have conducted over 25 sessions covering a wide range of
              topics including spirituality, horticulture, knitting,
              singing, dancing, and many others, enriching the lives of our
              community members.`,
    },
  ],
};
