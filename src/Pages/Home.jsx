// import Greetings from '../Components/Greetings'
import Layout from '../Components/Layout'
import TopPlaylist from '../Components/API Data/TopListened'
import Playlists from '../Components/API Data/Playlists'

function Home() {
  return (
    <Layout>
      {/* <Greetings/> */}
        <TopPlaylist/>
        <Playlists/>
    </Layout>
  )
}

export default Home