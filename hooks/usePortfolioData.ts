import { useTranslation } from 'react-i18next';
import { Experience, Project } from '../types';
import projectLms from '../images/project-lms.png';
import projectEcommerce from '../images/project-ecommerce.png';
import projectPortfolio from '../images/project-portfolio.png';
import projectDashboard from '../images/project-dashboard.png';
import projectFoodtech from '../images/project-foodtech.png';

export const usePortfolioData = () => {
    const { t } = useTranslation();

    const personalInfo = {
        name: t('personal_info.name'),
        title: t('personal_info.title'),
        subtitle: t('personal_info.subtitle'),
        location: t('personal_info.location'),
        phone: "+20 1288600785",
        email: "andrew.atef.dev@gmail.com",
        linkedin: "linkedin.com/in/andrew-atef-dev",
        github: "github.com/andrew-atef",
        portfolio: "main.devawi.tech",
        whatsapp: "https://api.whatsapp.com/send/?phone=201288600785",
    };

    const education = (t('education_list', { returnObjects: true }) as any[]).map((edu) => ({
        school: edu.school,
        degree: edu.degree,
        period: edu.period,
        grade: edu.grade,
        details: edu.details,
    }));

    const experience: Experience[] = (t('experience_list', { returnObjects: true }) as any[]).map((exp) => ({
        company: exp.company,
        role: exp.role,
        period: exp.period,
        type: exp.type,
        description: exp.description,
    }));

    const projects: Project[] = [
        {
            title: t('projects_list.0.title'),
            description: t('projects_list.0.description'),
            tags: ["Native PHP", "RESTful APIs", "SQL"],
            image: projectLms,
            details: t('projects_list.0.details', { returnObjects: true }) as string[],
            link: "https://lms-landing-page-gold.vercel.app/"
        },
        {
            title: t('projects_list.1.title'),
            description: t('projects_list.1.description'),
            tags: ["PHP", "Laravel", "SQL", "DigitalOcean"],
            image: projectEcommerce,
            details: t('projects_list.1.details', { returnObjects: true }) as string[],
        },
        {
            title: t('projects_list.2.title'),
            description: t('projects_list.2.description'),
            tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            image: projectPortfolio,
            details: t('projects_list.2.details', { returnObjects: true }) as string[],
            link: "https://690a8922d00a231d4e8c438e--andrewdevportfolio.netlify.app/"
        },
        {
            title: t('projects_list.3.title'),
            description: t('projects_list.3.description'),
            tags: ["Frontend Only", "UI/UX Design"],
            image: projectDashboard,
            details: t('projects_list.3.details', { returnObjects: true }) as string[],
            link: "https://www.youtube.com/watch?v=4V2p3BKMLEA"
        },
        {
            title: t('projects_list.4.title'),
            description: t('projects_list.4.description'),
            tags: ["PHP", "Laravel", "MySQL", "RESTful APIs"],
            image: projectFoodtech,
            details: t('projects_list.4.details', { returnObjects: true }) as string[],
        }
    ];

    return {
        personalInfo,
        education,
        experience,
        projects
    };
};
