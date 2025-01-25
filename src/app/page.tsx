export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <p className="text-2xl font-mono">hi, i am cucumbersalad</p>

        <section className="flex flex-col gap-1">
          <p className="font-mono font-bold text-xl">about me</p>
          <p className="">
            I am a <b>security researcher</b> with a proven track record in
            vulnerability research, bug hunting, and Capture-The-Flag (CTF)
            competitions. My goal is to leverage my experience and skills to
            excel in focused vulnerability research roles, contributing to
            cutting-edge security solutions. I thrive on tackling complex
            problems and making a tangible impact in both the cybersecurity and
            software development realms.
          </p>
        </section>

        <section className="flex flex-col gap-1">
          <p className="font-mono font-bold text-xl">projects</p>
          <p className="">
            most of my projects are on
            <b className="p-1 font-mono hover:underline">
              <a
                className="gap-1"
                href="https://github.com/0xcucumbersalad?tab=repositories"
                target="_blank"
              >
                github
              </a>
            </b>
            .
          </p>
          <ul className="list-disc mx-4">
            <li>
              <p>
                <b className=" font-mono hover:underline">
                  <a
                    href="https://graphqlyzer.jwisnetwork.com/"
                    target="_blank"
                  >
                    graphqlyzer
                  </a>
                </b>
                : a tool that converts graphql <i>Abstract Syntax Tree</i> (AST)
                structure to a refine http request, i use this during my
                security research on a company that is using a graphql
                <i>Abstract Syntax Tree</i> (AST) approach to structure the
                request. helps me to find 17 vulnerabilities, most of them are
                <i>broken access control</i> (BAC)
                <i>and insecure direct object references</i> (IDOR).
              </p>
            </li>

            <li>
              <p>
                <b className=" font-mono hover:underline">
                  <a
                    href="https://dashboard-staging.jwisnetwork.com/"
                    target="_blank"
                  >
                    business activity tracker
                  </a>
                </b>
                : our capstone project that tracks financial status of a
                company.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
