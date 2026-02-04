import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SectionContainer } from "../components/SectionContainer";

export const BlogDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const blogPosts = [
        {
            id: "1",
            title: "Top 10 Real Estate Investment Tips for 2025",
            content: `
Real estate investment remains one of the most reliable forms of wealth generation.
In this blog, we explore the best strategies to maximize returns in 2025.

1. Invest in Tier-2 & Tier-3 Smart Cities

Government development projects and infrastructure growth are pushing strong appreciation in emerging cities.

2. Prioritize Eco-friendly & Sustainable Housing

Buyers in 2025 prefer green-certified buildings with solar power, rainwater harvesting, and energy savings.

3. Explore Co-Living & Rental Housing Demand

Professional working population and students are increasing the need for shared, flexible accommodation.

4. Study Metro & Highway Expansion Zones

Properties near new business parks, airports, expressways, and metro lines are showing rapid appreciation.

5. Consider Commercial Real Estate

Shared office spaces, warehouses, and retail spaces are offering higher rental yields than residential.

6. Use Data Analytics & Market Research Tools

Advanced platforms now offer AI-driven price forecasting — use them before making a purchase.

7. Invest Early in New Township Projects

Buying at pre-launch or early phase brings higher returns when infrastructure is completed.

8. Diversify Property Types

Do not invest only in apartments — consider plots, villas, farmhouses, commercial units, and REITs.

9. Take Advantage of Technology & Virtual Tours

Digital real estate transactions, 3D walkthroughs, and online property buying speeds up decision making.

10. Plan Long-Term & Evaluate Rental Returns

Check rental yield, occupancy rate, maintenance cost, and resale value before investing.

Investment strategies will continue to evolve, and staying updated is key.
      `,
            image: "/images/blog/tips.jpg",
            author: "Rajesh Kumar",
            date: "2024-01-15"
        },
        {
            id: "2",
            title: "Sustainable Living: The Future of Real Estate",
            content: `
Sustainability is transforming housing development across the world, and it has become a major factor influencing modern real estate decisions. Builders, investors, and homebuyers are shifting toward eco-friendly construction and smart living practices that reduce environmental impact and improve quality of life.

Benefits of Sustainable Living

Reduced electricity and water bills
Energy-efficient appliances and solar systems significantly reduce costs.

Healthier lifestyle
Better airflow, natural sunlight, and improved indoor quality.

Higher property value
Eco-friendly buildings appreciate at faster rates.

Government incentives
Many regions offer tax benefits and renewable energy subsidies.
      `,
            image: "/images/blog/green.jpg",
            author: "Priya Sharma",
            date: "2024-01-10"
        },
        {
            id: "3",
            title: "Understanding Home Loan Options",
            content: `
Choosing the right loan is crucial when buying your dream home.
This guide breaks down top loan types and how to select the best option.

Types of loans:
- Fixed-rate home loan
- Floating-rate home loan
- Government subsidy schemes

Always compare interest rates and repayment terms before choosing.
      `,
            image: "/images/blog/loan.jpg",
            author: "Amit Patel",
            date: "2024-01-05"
        }
    ];

    const blog = blogPosts.find((item) => item.id === id);

    useEffect(() => {
        if (!blog) {
            navigate("/blog");
        }
    }, [blog, navigate]);

    if (!blog) return null;

    return (
        <div className="bg-white text-black">
            {/* Hero / Header */}
            <div className="pt-20 md:pt-24 bg-[#0D0D0D] text-white">
                <SectionContainer>
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Blogs
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300">{blog.title}</p>
                    </div>
                </SectionContainer>
            </div>

            {/* Blog Body */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link
                    to="/blog"
                    className="text-primary underline text-sm mb-4 inline-block font-medium"
                >
                    ← Back to Blogs
                </Link>

                <p className="text-gray-600 text-sm">
                    {new Date(blog.date).toLocaleDateString()} • {blog.author}
                </p>

                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full rounded-xl my-6 shadow-lg"
                />

                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6">
                    {blog.title}
                </h2>

                <div className="text-lg leading-relaxed text-[#333333] whitespace-pre-line font-normal">
                    {blog.content}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
