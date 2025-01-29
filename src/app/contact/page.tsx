export default function Blog() {
  return (
    <>
      <section className="flex flex-col gap-1">
        <p className="font-mono font-bold text-xl">contact</p>
        <p>
          you can contact me through my
          <a
            className="font-bold hover:underline mx-1"
            href="mailto:0xcucumbersalad@proton.me"
          >
            email
          </a>
        </p>

        <p className="font-mono font-bold text-xl">others</p>
        <ul className="list-disc mx-5">
          <li className="font-bold hover:underline">
            <a href="https://hackerone.com/cucumbersalad">hackerone</a>
          </li>
          <li className="font-bold hover:underline">
            <a href="https://www.linkedin.com/in/patiarba/">linkedin</a>
          </li>
        </ul>
      </section>
    </>
  );
}
