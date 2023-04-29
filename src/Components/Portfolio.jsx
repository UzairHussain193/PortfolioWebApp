/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop-books.jpg";

const imageAltText = "desktop with books,pens and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "The Top 5 Digital Marketing Skills You Need to Learn as a Beginner.🎉",
    description:"The top 5 digital marekting skills you should learn as a beginner.",
    url: "https://medium.com/@uzairhussain193/the-top-5-digital-marketing-skills-you-need-to-learn-as-a-beginner-8af45c0bc8b8",
  },
  {
    title: "Maximizing Your Personal Social Media Reach: Tips for Effective Social Media Marketing",
    description:
      "Explained the strategy that how can you increase your social media reach and get more followers.",
    url: "https://medium.com/@uzairhussain193/maximizing-your-personal-social-media-reach-tips-for-effective-social-media-marketing-ab328244ca58",
  },
  {
    title: "My Resume Site",
    description:"Created a time ago, using wordpress and it is not fully developed yet. ",
    url: "https://uzairhussain.tech/",
  },
  {
    title: "GitHub Repository of Data Structures and Algorithms in Java",
    description:
      "Created a repo, which contains some basic and advanced tasks of DSA in java, which helps beginners to learn and start contributing.",
    url: "https://github.com/UzairHussain193/Data_Structures_Algorithms",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
