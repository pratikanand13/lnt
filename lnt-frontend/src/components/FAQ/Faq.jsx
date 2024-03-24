import React from "react";

export default function Faq() {
  return (
    <div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white-700 dark:text-white">
            Frequently asked questions
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How did we go about building the first statistical model?
                </h3>
                <p className="text-gray-500 dark:text-gray-400 ">
                  The statistical model which is an ML model was selectively
                  trained on the past data records of a construction company
                  with departments like brickwork,concreting etc. and the labour
                  productivity was the the labelled target of 27 input
                  parameters which we reduced to 7 by feature extraction,
                  selection and dimensionality reduction algorithms for a user
                  friendly interface. We performed exploratory data analysis on
                  the dataset and after cleaning, preprocessing the data,
                  feature selection and one hot encoding several classification
                  algorithms were used to train the model. The Decision tree
                  proved to provide the best accuracy for labour productivity
                  with 86% and was chosen as the final model for prediction. An
                  overview of the statistical data analysis is also provided on
                  the website to better track the future productivity of the
                  workers and can be updated with time to monitor better.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How does the second AI model help determine the labour
                  productivity ?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A company's employees' sentiments towards the work culture
                  tells a lot about the productivity the company can expect from
                  them. Generally, happy employees yield high productivity and
                  our model extracts the sentiments of the employees through a
                  social media(Twitter) and gives us an overall estimate of the
                  productivity we can expect.
                </p>
              </div>
              {/* <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How does support work?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We're aware of the importance of well qualified support, that
                  is why we decided that support will only be provided by the
                  authors that actually worked on this project.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Feel free to{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    contact us
                  </a>{" "}
                  and we'll help you out as soon as we can.
                </p>
              </div> */}
              {/* <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  I want to build more than one project. Is that allowed?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  You can use Windster for an unlimited amount of projects,
                  whether it's a personal website, a SaaS app, or a website for
                  a client. As long as you don't build a product that will
                  directly compete with Windster either as a UI kit, theme, or
                  template, it's fine.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Find out more information by{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div> */}
            </div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Is the AI model automated? How exactly does it work?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, the model is automated in the sense that it automatically
                  fetches L&T tagged tweets from the past 24 hours and does
                  their sentiment analysis and provides a statistical percentage
                  of the positive, negative and neutral sentiments while also
                  displaying the most positive, negative and neutral tweets side
                  by side every 24 hours. This way by creating a unique hashtag
                  the company can analyse general tweets about L&T as well as
                  tweets from employees with specifically curated company
                  hashtags every 24 hours automatically.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How can Larsentoubro use this in real time and the future
                  scope?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  L&T can keep a track of the overall labour productivity of its
                  workers in the long run by setting tracking time periods as
                  well as it can analyse the sentiments about the company every
                  24 hours so that the company can take action about the
                  negative sentiments immediately or do something about the
                  workers' sentiments to boost the productivity.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  5. What technologies were used while building the prototype?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Several frontend, backend and ML/AI tech stacks were used,
                  namely: Frontend - Three-JS,React-JS,TypeScript Backend -
                  Nodejs,ExpressJS ML - Pandas, Numpy, Matplotlib,Seaborn,
                  Scipy, Scikit-learn, Classification Models(Logistic
                  regression/Decision Trees/Random Forests) Transformers,
                  RoBERTa model, NLP Media-Scraping software - Twscrape Web
                  hosting - AWS, Docker
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
