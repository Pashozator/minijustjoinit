import React, { useEffect, useState } from 'react';
import { Offer } from '../../modules/offers/domain/interfaces/offer';
import { api } from '../../modules/api/api';
import { getOffersEndpoint } from '../../modules/offers/domain/endpoints/get-offers.endpoint';
import { useParams } from 'react-router-dom';
import styles from './OfferView.module.css';
import { Loader } from '../../modules/shared/components/Loader/Loader';

export const OfferView: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [offer, setOffer] = useState<Offer>();
	const { id } = useParams<{ id: string }>();

	// TODO: Should be specific endpoint to get offer by id
	const getOffer = async () => {
		setLoading(true);

		const offers: Offer[] = await api.request<Offer[]>(getOffersEndpoint())

		setOffer(offers.find((_offer: Offer) => _offer.id === id));
		setLoading(false);
	}

	useEffect(() => {
		getOffer();
	}, [id]);

	if (loading) {
		return (<Loader />);
	}

	if (!offer) {
		return (<h1>Sorry, we could not find that offer</h1>);
	}

	return (
		<div className={styles.offer}>
			<h1>{offer.title}</h1>
			<div>City: {offer.city}</div>
			<div>Company: {offer.company_name}</div>
			<div>Employment type: {offer.employment_type}</div>
			<div>{offer.salary_from} - {offer.salary_to} {offer.salary_currency}</div>
		</div>
	);
}
