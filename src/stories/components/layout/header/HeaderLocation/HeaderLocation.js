import Location from '../../Location/Location.html';

const template = `
<div class="header-location">
    <div class="header-location__title">
        <span class="header-location__label">Your location is</span>
        <button class="dropdown-toggle" type="button" data-toggle="collapse" data-target="#qg-location-dropdown" aria-expanded="false" aria-controls="qg-location-dropdown" aria-label="Your location is unknown">
            <span class="location-name">unknown</span>
        </button>
        <span class="header-location__icon fa fa-map-marker"></span>
    </div>
    <div class="dropdown-menu qg-location-setter collapse" id="qg-location-dropdown">
        ${Location}
    </div>
</div>
`;
export default template;
