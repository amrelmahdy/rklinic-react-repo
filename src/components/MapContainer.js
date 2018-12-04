import React, {Component} from "react";
import './../../node_modules/izitoast/dist/css/iziToast.min.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Bone } from "react-loading-skeleton-placeholders"


class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {
            name: " نجاتي سراج، المنطقة الثامنة، مدينة نصر، محافظة القاهرة"
        },
    };

    onMarkerClick = (props, marker, clickEvent) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props,  map, clickEvent) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (
            <Map google={this.props.google}
                 zoom={18}
                 initialCenter={{lat: 30.0522316, lng: 31.3506658}}
                 onClick={this.onMapClicked}
            >

                <Marker
                    onClick={this.onMarkerClick}
                    title={'21 Ibrahim El-Refaey, Nasr City, Egypt.'}
                    name={'SOMA'}
                    position={{lat: 30.0522316, lng: 31.3506658}} />

                <InfoWindow>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}


const LoadingContainer = (props) => (
    <Bone height={400} width={100} />
)

export default GoogleApiWrapper({
    apiKey: ("AIzaSyD4ZixB1OlwnknFsHuo8oRrw345UknPVjQ"),
    LoadingContainer: LoadingContainer
})(MapContainer);


/// References ////////
//// https://www.npmjs.com/package/izitoast/v/1.0.2




