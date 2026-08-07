export interface PortfolioTopicSeo {
  categoryId: string;
  topicId: string;
  overviewTitle: string;
  overviewBody: string;
  deliverables: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}
