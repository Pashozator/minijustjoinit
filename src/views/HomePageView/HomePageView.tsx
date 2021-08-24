import React, { useEffect, useState } from 'react';
import styles from './HomePageView.module.css';
import { Offer } from '../../modules/offers/domain/interfaces/offer';
import { api } from '../../modules/api/api';
import { getOffersEndpoint } from '../../modules/offers/domain/endpoints/get-offers.endpoint';
import { OffersList } from '../../modules/offers/components/OffersList/OffersList';
import { OffersMap } from '../../modules/offers/components/OffersMap/OffersMap';
import { Loader } from '../../modules/shared/components/Loader/Loader';

export const HomePageView: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [offers, setOffers] = useState<Offer[]>([]);

	const getOffers = async () => {
		setLoading(true);
		setOffers(await api.request<Offer[]>(getOffersEndpoint()));
		setLoading(false);
	}

	useEffect(() => {
		getOffers();
	}, []);

	return (
		<div className={styles.container}>
			{loading ? <Loader /> : <OffersList offers={offers}/>}
			<OffersMap offers={offers}/>
		</div>
	);
}
