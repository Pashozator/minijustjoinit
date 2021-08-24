import React, { useEffect, useState } from 'react';
import { Offer } from '../../modules/offers/domain/interfaces/offer';
import { api } from '../../modules/api/api';
import { getOffersEndpoint } from '../../modules/offers/domain/endpoints/get-offers.endpoint';
import { useParams } from 'react-router-dom';
import styles from './OfferView.module.css';

export const OfferView: React.FC = () => {
	const [offer, setOffer] = useState<Offer>();
	const { id } = useParams<{ id: string }>();

	// TODO: Should be specific endpoint to get offer by id
	const getOffer = async () => {
		const offers: Offer[] = await api.request<Offer[]>(getOffersEndpoint())

		setOffer(offers.find((_offer: Offer) => _offer.id === id));
	}

	useEffect(() => {
		getOffer();
	}, [id]);

	if (!offer) {
		return (<h1>Sorry, we could not find that offer</h1>);
	}

	return (
		<div className={styles.offer}>
			<h1>{offer.title}</h1>
			<h2>{offer.city}</h2>
		</div>
	);
}
