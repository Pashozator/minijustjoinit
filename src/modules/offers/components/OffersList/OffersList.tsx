import React from 'react';
import styles from './OffersList.module.css';
import { OffersListProps } from './OffersList.props';
import { Offer } from '../../domain/interfaces/offer';
import { OffersListItem } from '../OffersListItem/OffersListItem';
import { Link } from 'react-router-dom';

export const OffersList: React.FC<OffersListProps> = props => {
	const { offers } = props;

	// TODO: Add virtual scroll to improve performance
	return (
		<div className={styles.list}>
			{offers.map((offer: Offer) => <Link to={`/offers/${offer.id}`} key={offer.id} ><OffersListItem className={styles.listItem} offer={offer}/></Link>)}
		</div>
	);
}
