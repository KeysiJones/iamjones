import { SocialMediaIcons } from './socialMediaIcons';

function Footer() {
  return (
    <footer className='flex flex-col w-full pb-8 bg-[#F6F6F6]'>
      {/* <h3 className="mb-4 text-3xl text-left" style={{ color: "#343a40" }}>
        Contato
      </h3> */}
      {/* <SocialMediaIcons /> */}
      <p
        className={`text-gray-700"
          } text-center text-xl mt-4`}
      >
        &copy; {new Date().getFullYear()} Jones. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export { Footer };
