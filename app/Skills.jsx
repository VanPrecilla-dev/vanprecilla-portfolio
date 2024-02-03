import React from "react";

const Skills = () => {
  return (
    <>
  <div className="flex-col flexCenter overflow-hidden lg:px-5">
  <section className="flex flex-col flexStar gap-5  text-white p-5 ">
        <h2 className="flex flex-1 bold-20 lg:bold-32 tracking-[5px] lg:tracking-[15px] ">Skills</h2>

        <div className="flex flex-1 text-sm lg:regular-16 leading-7 flex-col lg:flex-row flexStart gap-3 ">
          <div className="flex flex-1 flex-col text-center gap-3  ">
            <p>Proficient</p>
            <p>
              HTML5 | CSS | Bootstrap | Tailwind | JavaScript | Typescript |
              React.js, | Next.js
            </p>
          </div>
          <div className="flex flex-1 flex-col text-center gap-3  ">
            <p>Basic Knowledge</p>
            <p>
              Angular | jQuery | SaaS | C++ | Java | PHP | Redux |
              Node.js | C# | SQL | MySQL | Git | GitHub
            </p>
          </div>
          <div className="flex flex-1 flex-col text-center gap-3  ">
            <p>Other Skills</p>
            <p>
              Drawing | Graphic Design | Adobe Photoshop | Lightroom |
              Illustrator | Canva.
            </p>
          </div>
        </div>
      </section>
  </div>
   
    </>
  );
};

export default Skills;
