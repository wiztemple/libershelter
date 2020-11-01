import React from 'react';
import { useFetch } from '../../hooks';

// style
import './SidebarStyle.css';

const Sidebar = () => {
  const [response, loading, error] = useFetch("http://localhost:3000/genre");
  return (
    <div className="sidebar">
      <span>A curated list of every book ever written</span>
      {loading ? <p>e still dey load, relax small!</p> :
        (error ? <p>Baba, errror dey o!</p>
          : (response &&
            response.map(genreType =>
              <button className="button sidebar-button" value={genreType.genre_initials} key={genreType.id}>
                <span>{genreType.genre_initials}</span> {genreType.genre_name}
              </button>
            )
          )
        )
      }
    </div>
  )
}

export default Sidebar;
