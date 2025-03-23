export type Service = {
  _id: string;
  introSection: {
    title: string;
    slug: { current: string };
    icon: string;
    description: string;
  };
};

export type Project = {
  _id: string;
  primarySection: {
    title: string;
    subTitle: string;
    slug: { current: string };
    industries: string;
    serviceType: string;
    techStack: string;
    previewImage: string;
  };
};
