const projects = [
  {
    title: "Strapi CMS Deployment",
    imageurl: "/strapi.png",
    technologies: "AWS ECS Fargate, Terraform, Lambda, CloudWatch, SNS, VPC",
    description: "Deployed a production-ready Strapi CMS on AWS ECS Fargate across 3 AZs using Terraform. Automated stale ECS resource cleanup via Lambda, reducing costs by ~30%, and enabled CloudWatch monitoring with SNS alerts for <1 min ECS CPU threshold response. Ensured VPC isolation with private subnets and secure IAM roles.",
    links: {
      github: "https://github.com/navigill7/Strapi",
      website: null
    }
  },
  {
    title: "End-to-End CI/CD on AWS EKS",
    imageurl: "/eks.png",
    technologies: "AWS EKS, GitHub Actions, ArgoCD, Helm, Terraform, SonarQube, EFK",
    description: "Deployed a full-stack app on AWS EKS via CI/CD pipelines using GitHub Actions, ArgoCD, and Helm, cutting deployment time by 80%. Integrated SonarQube for 90%+ code coverage, provisioned EKS with Terraform (3 private subnets), and set up EFK stack for logging with Route 53 exposure.",
    links: {
      github: "https://github.com/navigill7/EKS-TERRAFORM-SECURE-INFRA",
      website: null
    }
  },
  {
    title: "UniLink",
    imageurl: "",
    technologies: "JavaScript, React, MongoDB, Node.js, Express",
    description: "Engineered a scalable full-stack application for academic collaboration, facilitating engagement for over 200 students and faculty. Increased community interaction by 40% and improved resource sharing efficiency by 30%.",
    links: {
      github: "https://github.com/navigill7/UniLink",
      website: null
    }
  }
];

export default projects;