import React from 'react'
import './header.css'
import profile from '../../assets/profile.png'

import { RiGithubLine, RiLinkedinBoxFill } from 'react-icons/ri'
import { MdOutlineMailOutline } from 'react-icons/md'

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          Hi, I'm Arlwin!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis eget dolor id imperdiet. Morbi nulla lorem, scelerisque vitae velit a, vehicula posuere nisl. Phasellus quis feugiat lorem. Vivamus convallis sem eget odio posuere, sit amet faucibus nibh vulputate. Sed suscipit, dolor aliquet tempor pretium, risus justo egestas neque, fringilla tempor erat leo vitae lacus. Proin nunc lacus, sollicitudin ac tortor a, convallis placerat metus. Proin sed ex eu risus hendrerit varius. Etiam varius magna dui, ac dapibus dolor tincidunt vitae. Nam magna dolor, lobortis nec volutpat nec, ornare ut nisl. Nulla lacus lacus, placerat sit amet vulputate sed, pretium nec ipsum. In elementum eu arcu id congue. Duis ultrices purus facilisis ullamcorper fringilla. Mauris lacinia rutrum turpis at faucibus.
        </p>
        <div className="header-content_icons">
          < RiGithubLine />
          < RiLinkedinBoxFill />
          < MdOutlineMailOutline />
        </div>
      </div>
      <div className="header-image">
          <img src={profile} alt="profile"/>
        </div>
    </div>
  )
}

export default Header