import './topbar.css';
import {Search, Person, Chat, Notifications} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      
      <div className="topbarleft">
        <span className="logo">Socially</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search/>
          <input placeholder="Search for friends posts or videos" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

