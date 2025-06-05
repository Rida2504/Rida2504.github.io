import React, {useContext} from "react";
import "./Publications.scss";
import {publicationsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Publications() {
  const {isDark} = useContext(StyleContext);
  
  if (!publicationsSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <div className="publications-container">
          <div className="publications-header">
            <h1 className="publications-heading">{publicationsSection.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode publications-subtitle"
                  : "subTitle publications-subtitle"
              }
            >
              {publicationsSection.subtitle}
            </p>
          </div>
          <div className="publications-cards-div">
            {publicationsSection.publications.map((publication, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode publication-card-dark"
                      : "publication-card"
                  }
                >
                  <div className="publication-detail">
                    <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                      {publication.title}
                    </h5>
                    <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                      {publication.authors}
                    </p>
                    <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                      {publication.conference} • {publication.date}
                    </p>
                    <p
                      className={
                        isDark
                          ? "dark-mode publication-description"
                          : "publication-description"
                      }
                    >
                      {publication.description}
                    </p>
                    <div className="publication-tags">
                      {publication.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={
                            isDark
                              ? "dark-mode publication-tag"
                              : "publication-tag"
                          }
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="publication-links">
                      <a
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          isDark
                            ? "dark-mode publication-link"
                            : "publication-link"
                        }
                      >
                        View Paper
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
