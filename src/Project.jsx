import Heading from "./Heading";
import Singleproject from "./Singleproject";

function Project() {
  return (
    <>
      <Heading title="Project" />
      <div className="Project" id="projects">
        <div>
          {/* pokedex */}
          <Singleproject
            name={"pokedex-demo"}
            ProjectLink={"https://pokemonlist12.netlify.app/"}
            ProjectImage={"./pokemon.png"}
            githubLink={"https://github.com/Roshanrocked/pokemon"}
            discrip={
              "It is a website that shows all Pokemons with all details about them. It has many features and is easy to use."
            }
            techstack={["React", "Html", "CSS", "JavaScript"]}
            features={[
              "Landing Page",
              "Search page",
              "All page",
              "Bookmark page",
              "Filters",
              "Responsiveness",
            ]}
          />
          {/* spacex-demo */}
          <Singleproject
            name={"spacex-demo"}
            ProjectLink={"https://spacex11.netlify.app/"}
            ProjectImage={"./spacex.png"}
            githubLink={"https://github.com/Roshanrocked/spacex-demo"}
            discrip={
              "It is a website that show all SpaceX's capsules that are been created by SpaceX."
            }
            techstack={[
              "React",
              "Node.Js",
              "MongoDb",
              "Express.Js",
              "Html",
              "CSS",
              "JavaScript",
            ]}
            features={[
              "Landing Page",
              "Login page",
              "Signup page",
              "Filters",
              "Popup",
              "Authentication",
              "Responsiveness",
            ]}
          />
          {/* typing-test */}
          <Singleproject
            name={"Typing-test"}
            ProjectLink={"https://typingtest1.netlify.app/"}
            ProjectImage={"./typing.png"}
            githubLink={"https://github.com/Roshanrocked/Typing-test"}
            discrip={
              "This one is a typing test that expresses your typing skills in words per minute. The more you practice typing, and the more you test your typing speed, the higher your WPM score will be."
            }
            techstack={["React", "JavaScript", "Html", "CSS"]}
            features={[
              "Landing Page",
              "practice paragraph",
              "Wpm and accuray checker",
              "Total character typed ",
              "Correct character type",
              "Wrong character type",
              "Responsiveness",
            ]}
          />
          {/* Quora Clone */}
          <Singleproject
            name={"Quora Clone"}
            ProjectLink={"https://quorac.netlify.app/"}
            ProjectImage={"./quora.png"}
            githubLink={"https://github.com/Roshanrocked/Quora-mern"}
            discrip={
              "Quora is a social media website to gain and share knowledge. It is a place where users can ask questions and connect with people who provide unique insights and quality answers on various topics."
            }
            techstack={[
              "React",
              "Node.Js",
              "MongoDb",
              "Express.Js",
              "Html",
              "CSS",
              "JavaScript",
              "Chakara.UI",
            ]}
            features={[
              "Landing Page",
              "LogIn & Signup",
              "Post Page",
              "Answer Page",
              "Filters",
              "Following Page",
              "Comment's section",
              "Like's section",
              "Responsiveness",
            ]}
          />{" "}
          {/* e-commerce */}
          <Singleproject
            name={"e-commerce-demo"}
            ProjectLink={"https://zagnow-roshan.netlify.app/"}
            ProjectImage={"./e_commerce.png"}
            githubLink={"https://github.com/Roshanrocked/zagnow"}
            discrip={
              "It is an e-commerce website where users can select item form the website and buy.It has 3 part 1st is e_commerce, 2nd is form 3th is dashboard. "
            }
            techstack={[
              "React",
              "Html",
              "CSS",
              "JavaScript",
              "Chart.js",
              "Tailwindcss",
            ]}
            features={[
              "Landing Page",
              "SingleItem page",
              "Cart page",
              "Dashboard page",
              "Form page",
              "Filters",
              "Pagination",
              "Responsiveness",
            ]}
          />
          {/* resume */}
          <Singleproject
            name={"Fastresumes"}
            ProjectLink={"https://fastresumes.netlify.app/"}
            ProjectImage={"./fastresume.png"}
            githubLink={"https://github.com/Roshanrocked/Resume-builder"}
            discrip={
              "Our Perfect resume builder takes the hassle out of resume writing. Choose templates and follow easy prompts to create the perfect job-ready resume."
            }
            techstack={[
              "React",
              " Node.Js",
              "JavaScript",
              "MongoDb",
              " Express.Js",
              "Html",
              "CSS",
            ]}
            features={[
              "Landing Page",
              "Basic details form",
              "Eduaction details form",
              "Skills and Hobbies details form",
              "Projects details form",
              "Resume that can be downloaded",
              "Responsiveness",
            ]}
          />
          <Singleproject
            name={"Url-Shortener"}
            ProjectLink={"https://url-shor.cyclic.app/"}
            ProjectImage={"./url-shortner.png"}
            githubLink={"https://github.com/Roshanrocked/url-shortener"}
            discrip={
              "It is a free URL Shortener for transforming long, ugly links into nice, memorable and trackable short URLs. Use it to shorten links for any social media platforms. "
            }
            techstack={[
              "Html",
              "CSS",
              "JavaScript",
              "React",
              " Node.Js",
              "MongoDb",
              " Express.Js",
            ]}
            features={[
              "Long url's will be short",
              "New shorten link can be share",
              "New shorten link can be reuse",
              "button for copy shorten url",
              "Responsiveness",
            ]}
          />
          <Singleproject
            name={"BookmyShow Clone"}
            ProjectLink={"https://bookmyshowclone-9.netlify.app/"}
            ProjectImage={"./bms.jpg"}
            githubLink={"https://github.com/Vidisha-Khalpada/BookMyShow"}
            discrip={
              "A movie booking company that book ticket in all over india. It was a team project and created in 5 day."
            }
            techstack={["Html", "CSS", "JavaScript"]}
            features={[
              "LogIn & Signup",
              "Landing Page",
              "Seat Selection",
              "Movie Page",
              "Deatail Page",
              "Cart & Filters",
              "Responsiveness",
            ]}
          />
          <Singleproject
            name={"Netmed clone"}
            ProjectLink={"https://url-shor.cyclic.app/"}
            ProjectImage={"./nn.jpg"}
            githubLink={"https://github.com/GryffindorAdi/netmed"}
            discrip={
              "A pharma company that supply pharma items in all over india. It was a team project and created in 5 day."
            }
            techstack={["Html", "CSS", "JavaScript"]}
            features={[
              "Login & signup pages",
              "Cart & Filters",
              "Product Page",
              "Responsiveness",
            ]}
          />
        </div>
      </div>
    </>
  );
}
export default Project;
