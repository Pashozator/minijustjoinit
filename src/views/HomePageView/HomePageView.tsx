import React, { useEffect, useState } from 'react';
import styles from './HomePageView.module.css';
import { Offer } from '../../modules/offers/domain/interfaces/offer';
import { api } from '../../modules/api/api';
import { getOffersEndpoint } from '../../modules/offers/domain/endpoints/get-offers.endpoint';

export const HomePageView: React.FC = () => {
	const [offers, setOffers] = useState<Offer[]>([]);

	const getOffers = async () => setOffers(await api.request<Offer[]>(getOffersEndpoint()));

	useEffect(() => {
		getOffers();
	}, []);

	return (
		<div className={styles.container}>
			<div>{JSON.stringify(offers)}</div>
			<div>map</div>
		</div>
	);
}
