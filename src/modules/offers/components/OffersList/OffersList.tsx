import React from 'react';
import styles from './OffersList.module.css';
import { OffersListProps } from './OffersList.props';
import { Offer } from '../../domain/interfaces/offer';

export const OffersList: React.FC<OffersListProps> = (props: OffersListProps) => {
	const { offers } = props;

	return (
		<div className={styles.list}>
			{offers.map((offer: Offer) => (<div>{JSON.stringify(offer)}</div>))}
		</div>
	);
}
