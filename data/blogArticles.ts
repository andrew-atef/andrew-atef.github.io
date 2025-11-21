import { BlogArticle } from '../types';
import projectLms from '../images/project-lms.png';
import egyptPaymentGatewaysGuide from '../images/egypt-payment-gateways-guide.png';
import projectPortfolio from '../images/project-portfolio.png';
import projectDashboard from '../images/project-dashboard.png';
import projectFoodtech from '../images/project-foodtech.png';

export const BLOG_ARTICLES: BlogArticle[] = [
    {
        id: '1',
        slug: 'egypt-payment-gateways-guide',
        category: 'Payment Gateways',
        image: egyptPaymentGatewaysGuide,
        date: '2024-11-21',
        readTime: 10,
        tags: ['Payment Gateways', 'E-commerce', 'Egypt', 'Paymob', 'Fawry']
    }
];