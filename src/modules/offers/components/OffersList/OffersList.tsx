import React from 'react';
import styles from './OffersList.module.css';
import { OffersListProps } from './OffersList.props';
import { Offer } from '../../domain/interfaces/offer';
import { OffersListItem } from '../OffersListItem/OffersListItem';
import { Link } from 'react-router-dom';

export const OffersList: React.FC<OffersListProps> = props => {
	const { offers } = props;

	return (
		<div className={styles.list}>
			{offers.map((offer: Offer) => <Link to={`/offers/${offer.id}`}><OffersListItem key={offer.id} className={styles.listItem} offer={offer}/></Link>)}
		</div>
	);
}
