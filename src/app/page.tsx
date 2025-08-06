import Link from "next/link";
import { Blog } from "./components/Blog";
export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8">
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
          <p className="font-mono font-bold text-xl">certifications</p>
          <ul className="list-disc mx-4">
            <li className="font-bold hover:underline font-mono">
              <Link
                href="https://certs.ine.com/028e9e4c-6f8b-4094-a815-f8238f20c592"
                target="_blank"
              >
                Web Application Penetration Tester eXtreme (WAPTX)
              </Link>
            </li>
            <li className="font-bold hover:underline font-mono">
              <Link
                href="https://certified.tcm-sec.com/066656eb-9683-4f1e-8849-78c9df9da918?key=c340ffe8dd7593e5551d0b555c92f4bd77232eb7b930f199bb0cfe6b11a39655&record_view=true"
                target="_blank"
              >
                Practical Web Pentest Professional (PWPP)
              </Link>
            </li>
            <li className="font-bold hover:underline font-mono">
              <Link
                href="https://www.credly.com/badges/c349d6cf-b854-45a6-b681-8ca9b9a91e9f/public_url"
                target="_blank"
              >
                APIsec Certified Practitioner (ACP)
              </Link>
            </li>
            <li className="font-bold hover:underline font-mono">
              <Link
                href="https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXXtPW8OUV1g3TyvLhktjKQoZoIntbPUOuhvehyk3j/wFGvfz2CgxISVYTLZ0ZrOnQAds2dufdH55MbWAwRh51f8="
                target="_blank"
              >
                Certified AppSec Pentesting eXpert (CAPenX)
              </Link>
            </li>
            <li className="font-bold hover:underline font-mono">
              <Link
                href="https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXehDUG2FXoigmLD34oLcwoRkwZ2r3YNAZd3VBZUnBblbfbpCPq4lxZS8rzcUFd2uLZtmsDfuDuNiyjUOPVIvdB0="
                target="_blank"
              >
                Certified Network Security Practitioner (CNSP)
              </Link>
            </li>
            <li className="font-bold hover:underline font-mono">
              <Link
                href="https://raw.githubusercontent.com/popoyPOY/popoyPOY.github.io/refs/heads/main/CAPEN.png"
                target="_blank"
              >
                Certified AppSec Practitioner (CAP)
              </Link>
            </li>
          </ul>
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
                <i> broken access control</i> (BAC)
                <i> and insecure direct object references</i> (IDOR).
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

        <div>
          <Blog />
        </div>
      </main>
    </>
  );
}
