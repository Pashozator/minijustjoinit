import { RequestMethod } from '../../../api/enums/request-method.enum';
import { Endpoint } from '../../../api/interfaces/endpoint';

export function getOffersEndpoint(): Endpoint {
	return {
		url: 'offers',
		method: RequestMethod.GET
	}
}
