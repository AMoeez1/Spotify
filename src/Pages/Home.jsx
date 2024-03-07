// import Greetings from '../Components/Greetings'
import Layout from '../Components/Layout'
import TopPlaylist from '../Components/API Data/TopListened'
import Playlists from '../Components/API Data/Playlists'

function Home() {
  return (
    <Layout>
      <div className="h-screen overflow-hidden hover:overflow-y-scroll">
      {/* <Greetings/> */}
        <TopPlaylist/>
        <Playlists/>

      </div>
    </Layout>
  )
}

export default Home