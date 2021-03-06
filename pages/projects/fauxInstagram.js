import MoreInfoCard from "../../components/MoreInfoCard";
import Head from 'next/head';



const fauxInstagram = () => {
  return ( 
    <>
    <Head>
        <title>Faux Instagram | Sam Donaghy-Bell</title>
        <meta name="keywords" content="Smart Mirror" />
        <meta name="description" content="A faux Instagram made with Laravel" />
    </Head>
      <div className="absolute top-[112px] w-full left-0">
        <div className="flex w-full justify-center items-center gap-x-12 h-[80px]">
        <MoreInfoCard
            content='
            <div>
              <div class="moreInfoContent">
              <p class="themeColorText">With all the lockdowns and not being able to see family I came up with the idea of creating this platform and with the help of a few tutorials I made - Family Instagram or FamGram.  It&apos;s an Instagram style platform I built using Laravel. <br><br><br> <strong>Packages used -</strong>
              <ul class="listElements themeColorText">
                <li>Laravel</li>
                <li>HomeBrew</li>
                <li>Composer</li>
                <li>NodeJS</li>
                <li>NPM</li>
                <li>Artisan</li>
                <li>Intervention Image</li>
              </ul>
              <br><br>
              <p class="themeColorText"><strong>Features Include</strong> -</p>
              <ul class="listElements themeColorText">
                <li>Create a user which is stored to the database</li>
                <li>Get a welcome email upon registering</li>
                <li>Edit and add a profile picture, title, description and URL</li>
                <li>Upload a post with caption</li>
                <li>Follow and unfollow users</li>
                <li>Visits other users profiles</li>
                <li>Shows a newsfeed of their followed users posts</li>
      
              </ul><br>
      
              </div>
      
              </p>
              </div>
              </div>
              '
          />
          <a className="underline hover:text-blue-400 transition" href="https://github.com/sdbxsdb/famGram" target="_blank" rel="noreferrer">GitHub</a>
      
        </div>
        <div className="flex items-center flex-col mb-4">
          <p className='text-smallerTitle'>Faux Instagram</p>
          <small>Please allow time for the external site below to load - it may take a few seconds.</small>
        </div>
        <div className="iframeWrapper dark:bg-darkGrey bg-lightGrey">
          <iframe className="w-screen h-[calc(100vh-280px)]" src="https://www.youtube.com/embed/wa-rlc44v5I"></iframe>
        </div>
      </div>
    </>
  );
}
 
export default fauxInstagram;