import Head from 'next/head';
//import backgroundImage from "/images/header-background.png"
import Image from 'next/image';

export async function getStaticProps() {
  const avatarImagePath = `https://www.gravatar.com/avatar/84d9535012fdd47e2a83e1dcdad03e86?s=600`;
  return { props: { avatarImagePath } };
}

export default function Home({ postList, avatarImagePath }) {
  //const avatarLink = "https://linkedin.com/in/keysijones";

  return (
    <main className='flex flex-col border-b'>
      <Head>
        <title>Jones's personal Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <div className='pl-28 menu'>
          <ul>
            <li className='transition-all hover:scale-110 hover:cursor-pointer'>
              <a>Página inicial</a>
            </li>
            <li className='transition-all hover:scale-110 hover:cursor-pointer'>
              <a>Sobre</a>
            </li>
            <li className='transition-all hover:scale-110 hover:cursor-pointer'>
              <a>Contato</a>
            </li>
          </ul>
        </div>
        <div className='h-screen hero-section'>
          <Image
            src='/images/header-background.png'
            alt='me'
            layout='fill'
            className='absolute'
          />
          <div className='relative max-w-[530px] top-[37vh] font-medium ml-32 max-h-[350px] z-10'>
            <p className='text-white text-4xl leading-[44px]'>
              Se você deseja estar acima da média em várias áreas da sua vida e
              alimentar a sua mente com conteudo positivo e motivacional, esse
              podcast é para você.
            </p>
            <button
              className='px-4 py-2 text-white bg-[#E92C01] rounded-lg mt-14 text-2xl hover:scale-110 transition-all'
              onClick={() =>
                window.open(
                  'https://www.youtube.com/playlist?list=PLUpxFKg0SwNkVXcPl_w1HFm8BrFTq9Mbn',
                  '_blank'
                )
              }
            >
              Escutar agora
            </button>
          </div>
          <div className='h-screen bg-green'>
            <Image
              src='/images/header-background.png'
              alt='me'
              layout='fill'
              className='absolute'
            />
          </div>
        </div>
        <div className='flex items-center justify-center h-screen'>
          <Image
            src='/images/podcast-logo.png'
            alt='podcast logo'
            width={504}
            height={545}
            className=''
          />
          <div className='max-w-[530px] font-medium ml-32 max-h-[350px] z-10'>
            <p className='text-black text-4xl leading-[44px]'>
              Nesse podcast eu compartilho dicas e estratégias que me ajudaram a
              sair de uma vida medíocre para uma vida de sonhos realizados,
              saúde e liberdade financeira.
            </p>
            <button
              className='px-4 py-2 text-white bg-[#E92C01] rounded-lg mt-14 text-2xl hover:scale-110 transition-all'
              onClick={() =>
                window.open(
                  'https://www.youtube.com/playlist?list=PLUpxFKg0SwNkVXcPl_w1HFm8BrFTq9Mbn',
                  '_blank'
                )
              }
            >
              Escutar agora
            </button>
          </div>
        </div>
        <div className='bg-[#F6F6F6] flex items-center h-screen justify-evenly'>
          <div className='max-w-[530px] font-medium z-10'>
            <p className='text-4xl leading-[44px] text-black'>
              Me chamo Keysi Jones (Pode me chamar de Jones, mais facil). Nasci
              e cresci em um bairro pobre de Porto Alegre, RS. Trabalho como
              desenvolvedor de software desde 2020. Quando nao estou
              trabalhando, me dedico a aprender sobre desenvolvimento pessoal e
              ajudar outras pessoas a se desenvolverem compartilhando minhas
              experiencias no podcast Deixando a mediocridade.
            </p>
            <button
              className='px-4 py-2 text-white bg-[#1DB954] rounded-lg mt-14 text-2xl hover:scale-110 items-center transition-all'
              onClick={() =>
                window.open(
                  'https://www.youtube.com/playlist?list=PLUpxFKg0SwNkVXcPl_w1HFm8BrFTq9Mbn',
                  '_blank'
                )
              }
            >
              Escutar agora
            </button>
          </div>
          <Image
            src='/images/jones.png'
            alt='me'
            width={370}
            height={525}
            className=''
          />
        </div>
        <div className='bg-[#F6F6F6] flex items-center justify-evenly p-10'>
          <p className='text-5xl leading-[44px] text-black'>
            Me siga nas redes sociais
          </p>
        </div>
      </div>
    </main>
  );
}
