import React from "react";
import "./postSection.css";

interface Post {
  title: string;
  date: string;
  category: string;
  description: string;
}

const posts: Post[] = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    category: "Design, Pattern",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    category: "Figma, Icon Design",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    category: "Figma, Icon Design",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const PostSection: React.FC = () => {
  return (
    <section className="recent-posts">
      <div>
        <h2>Recent posts</h2>
        <a href="#" className="view-all">
          View all
        </a>
      </div>

      <div className="post-container">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <h3>{post.title}</h3>
            <p className="meta">
              <span>{post.date}</span> | <span>{post.category}</span>
            </p>
            <p className="description">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostSection;
