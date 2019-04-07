import SOCIAL_PROFILES from './data/socialProfiles'
import React from 'react';

class SocialProfile extends React.Component {
  render() {
    const { image, link } = this.props.socialProfile;
    return (
      <span>
        <a href={link}><img src={image} alt="social-profile" style={{ margin: 10, width: 35, height: 35 }} /></a>
      </span>
    )
  }
}

class SocialProfiles extends React.Component {
  render() {
    return (
      <div>
        <h2>Connect with me!</h2>
        <div>
          {
            SOCIAL_PROFILES.map(profile => {
             return <SocialProfile key={ profile.id } socialProfile={ profile } />
            })
          }
        </div>
      </div>
    )
  }
}

export default SocialProfiles; 