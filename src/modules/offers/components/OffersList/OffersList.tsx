import React from 'react';
import styles from './OffersList.module.css';
import { OffersListProps } from './OffersList.props';
import { Offer } from '../../domain/interfaces/offer';
import { OffersListItem } from '../OffersListItem/OffersListItem';

export const OffersList: React.FC<OffersListProps> = props => {
	const { offers } = props;

	return (
		<div className={styles.list}>
			{offers.map((offer: Offer) => <OffersListItem key={offer.id} className={styles.listItem} offer={offer}/>)}
		</div>
	);
}
