import Link from "next/link";

export const Certifications = () => {
  return (
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
            href="https://www.credly.com/badges/e8c3b15a-384f-40b7-9446-c622d2587539/public_url"
            target="_blank"
          >
            Hack The Box Certified Bug Bounty Hunter (HTB CBBH)
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
            href="https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXXtPW8OUV1g3TyvLhktjKQoZoIntbPUOuhvehyk3j/wFGvfz2CgxISVYTLZ0ZrOnQAds2dufdH55MbWAwRh51f8="
            target="_blank"
          >
            Certified AppSec Pentesting eXpert (CAPenX)
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
  );
};
