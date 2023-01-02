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
        <div className='flex flex-col items-center bg-white p-14 justify-evenly'>
          <p className='text-5xl leading-[44px] text-black'>
            Me siga nas redes sociais
          </p>
          <div className='flex justify-around w-full max-w-xs py-12'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='48'
              viewBox='0 0 24 24'
              fill='#ff42ac'
            >
              <path d='M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='48'
              viewBox='0 0 24 24'
              fill='#1a77f2'
            >
              <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='48'
              viewBox='0 0 24 24'
              fill='#1ea1f1'
            >
              <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z' />
            </svg>
            <svg
              width='48'
              height='48'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='#0fbc4c'
            >
              <path d='M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z' />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
