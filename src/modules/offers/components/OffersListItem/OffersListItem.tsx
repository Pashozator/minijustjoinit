import React from 'react';
import styles from './OffersListItem.module.css';
import { OffersListItemProps } from './OffersListItem.props';

export const OffersListItem: React.FC<OffersListItemProps> = props => {
	const { offer, className } = props;

	return (
		<div className={`${styles.item}${className ? ` ${className}` : ''}`}>
			<div className={styles.logoContainer}>
				<img className={styles.logo} src={offer.company_logo_url} alt=""/>
			</div>
			<div className={styles.info}>
				<div className={styles.title}>{offer.title}</div>
				<div className={styles.additional}>
					<span>{offer.company_name}</span>
					<span>{offer.city}</span>
					<span>{offer.salary_from} - {offer.salary_to} {offer.salary_currency}</span>
				</div>
			</div>
		</div>
	);
};
