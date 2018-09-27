import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { getDistance } from '../utils/distance.js';

class OrganizationCard extends Component {
  render() {
    const { name, categoryautosortscript, overview, location, website, facebookUrl,
      instagramUrl, twitterUrl, phone } = this.props.organization;


    let distance;
    if(this.props.haveCoords){
      distance = <p>Distance from your Location: {getDistance({coordinates: this.props.organization.coordinates}, this.props.currentPos ).toPrecision(4)} miles</p>
    }

    return (
      <Card>
        <div>
          <h3>{name}</h3>
          <p className="lead">{categoryautosortscript}</p>
        </div>
        <div>
          {distance}
        </div>
        {overview && <p>{overview}</p>}
        {location && <p><span className="fa fa-map-o"></span> {location}</p>}
        {phone && <p>{phone}</p>}
        {website && <p><span className="fa fa-link"></span> <a href={website}>Website</a></p>}
        {(facebookUrl || instagramUrl || twitterUrl) && <ul className="list-inline">
          {facebookUrl && <li><a href="{facebookUrl}" data-type="social"><i className="fa fa-2x fa-facebook-square">{facebookUrl}</i></a></li>}
          {instagramUrl && <li><a href="{instagramUrl}" data-type="social"><i className="fa fa-2x fa-facebook-square">{instagramUrl}</i></a></li>}
          {twitterUrl && <li><a href="{twitterUrl}" data-type="social"><i className="fa fa-2x fa-facebook-square">{twitterUrl}</i></a></li>}
        </ul>}

      </Card>
    );
  }
}

export default OrganizationCard;