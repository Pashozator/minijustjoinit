import React  from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import styles from './OffersMap.module.css';
import { OffersMapProps } from './OffersMap.props';
import { Offer } from '../../domain/interfaces/offer';

export const OffersMap: React.FC<OffersMapProps> = props => {
	const { offers } = props;

	// TODO: Add layer with webgl engine to improve performance
	return (
		<div>
			<MapContainer className={styles.map} center={[50.0618971, 19.9367559]} zoom={6} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{offers.map((offer: Offer) => <Marker position={[offer.latitude, offer.longitude]} key={offer.id}/>)}
			</MapContainer>
		</div>
	);
}
